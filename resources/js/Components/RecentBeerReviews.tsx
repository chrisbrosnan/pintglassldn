import React, { useEffect, useState } from 'react';

interface Beverage {
    id: string;
    title: string;
    date: string;
    featuredImage: {
        node: {
            sourceUrl: string;
            title: string;
            caption: string;
        }
    }
}

export default function RecentBeerReviews() {
    const wp_graph_ql_query = `query AllBeverages {
        allBeverage(where: {}) {
            nodes {
            content
            slug
            status
            title
            date
            databaseId
            featuredImage {
                    node {
                    sourceUrl
                    title
                    mediaItemUrl
                    caption
                    uri
                    }
                }
            id
            }
        }
    }`;

    const fetch_beer_reviews = async () => {
        const response = await fetch('https://pintglassldn.com/cms/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: wp_graph_ql_query }),
        });
        const data      = await response.json();
        const beverages = data.data.allBeverage.nodes;
        return beverages;
    }

    const [beverages, setBeverages] = useState<Beverage | null>(null);

    useEffect(() => {
        fetch_beer_reviews().then((beverages) => {
            setBeverages(beverages);
            console.log(beverages);
        });
    }, []);

    return (
        <div>
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-8 lg:px-12 pb-4">
                <h2 className="font-black text-lg">Recent Beer Reviews</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-8 lg:px-12">
                {/* {
                    // @ts-ignore
                    beverages.map((beverage) => {
                        return (
                            <div key={beverage.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={beverage.featuredImage.node.sourceUrl} alt={beverage.featuredImage.node.title} className="w-full h-48 object-cover object-center" />
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-800">{beverage.title}</h3>
                                    <p className="text-gray-600">{beverage.date}</p>
                                    <p className="text-gray-600">{beverage.featuredImage.node.caption}</p>
                                </div>
                            </div>
                        );
                    })
                } */}
            </div>
        </div>
    );
}
