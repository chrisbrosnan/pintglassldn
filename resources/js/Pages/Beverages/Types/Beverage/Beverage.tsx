import { Link, Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { PageProps } from '@/types';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

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

export default function Beverage({ auth, appName, slug }: PageProps<{ appName: string, slug: string }>) {

    const wp_graph_ql_query = `query Beverage {
        beverage(id: "` + slug + `", idType: SLUG){
            id
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
            beverageFields {
                abv
                brewery
                firstBrewed
                origin
                rating
            }
        }
    }`;

    const fetch_beer_review = async () => {
        const response = await fetch('https://pintglassldn.com/cms/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: wp_graph_ql_query }),
        });
        const data     = await response.json();
        const beverage = data.data.beverage;
        return beverage;
    }

    const [beverage, setBeverages] = useState<Beverage | null>(null);

    useEffect(() => {
        fetch_beer_review().then((beverage) => {
            setBeverages(beverage);
        });
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-white text-black/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full">
                        <Header auth={auth} appName={appName} />

                        <main className="px-12 py-6">
                            <h1 className="text-4xl font-bold text-center">{ beverage?.title }</h1>
                        </main>

                        <Footer appName={appName} auth={auth} />
                    </div>
                </div>
            </div>
        </>
    );
}
