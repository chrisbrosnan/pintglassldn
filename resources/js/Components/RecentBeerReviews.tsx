import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

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
    const wp_graph_ql_query = `query RecentBeverages {
        allBeverage(first: 5) {
            nodes {
                content
                slug
                status
                title
                date
                databaseId
                id
                beverageFields {
                    flagCode
                }
                featuredImage {
                    node {
                        sourceUrl
                        title
                        mediaItemUrl
                        caption
                        uri
                    }
                }
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
        });
    }, []);

    const beverages_array = beverages ? beverages : [];

    return (
        <div>
            <div className="lg:px-12 pb-4">
                <h2 className="font-black text-lg">Recent Beer Reviews</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-5 lg:gap-8 lg:px-12">
                {
                    // @ts-ignore
                    beverages_array.map((beverage, index) => {
                        let flagImg = 'https://flagsapi.com/' + beverage.beverageFields.flagCode + '/shiny/64.png';
                        return (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <Link  href={route('beverages.singular', { type: 'lager', slug: beverage.slug })}>
                                    <img src={ flagImg } alt={ beverage.beverageFields.origin } className="ml-1 w-5 h-5 inline-block" />
                                </Link>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-800">{beverage.title}
                                        <img src={ flagImg } alt={ beverage?.beverageFields.origin } className="ml-1 w-5 h-5 inline-block" />
                                    </h3>
                                    <p className="text-gray-600 my-3">{beverage.content.substring(0,75).replace('<p>', '')}...</p>
                                    <Link href={route('beverages.singular', { type: 'lager', slug: beverage.slug })}>
                                        <button className="bg-gray-400 hover:bg-amber-200 hover:text-amber-900 text-white font-bold p-2 text-xs rounded">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
