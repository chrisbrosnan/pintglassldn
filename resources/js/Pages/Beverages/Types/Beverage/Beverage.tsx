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

export default function Welcome({ auth, appName }: PageProps<{ appName: string }>) {

    const wp_graph_ql_query = `query Beverage {
        beverage(id: "", idType: SLUG){
            id,
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
        // const beverage = data.data.Beverage;
        console.log(data);
        return data;
        // return beverage;
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

                        </main>

                        <Footer appName={appName} auth={auth} />
                    </div>
                </div>
            </div>
        </>
    );
}
