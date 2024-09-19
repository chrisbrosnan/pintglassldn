import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import BlogRecentPosts from '@/Components/BlogRecentPosts';
import BlogTrendingPosts from '@/Components/BlogTrendingPosts';
import RecentBeerReviews from '@/Components/RecentBeerReviews';
import TrendingBeerReviews from '@/Components/TrendingBeerReviews';
import RecentVenueReviews from '@/Components/RecentVenueReviews';
import TrendingVenueReviews from '@/Components/TrendingVenueReviews';

export default function Welcome({ auth, appName }: PageProps<{ appName: string }>) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-white text-black/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full">
                        <Header auth={auth} appName={appName} />

                        <main className="px-12 py-6">

                            <BlogRecentPosts />
                            <hr className="mt-8 mb-4"/>
                            <BlogTrendingPosts />
                            <hr className="mt-8 mb-4"/>
                            <RecentBeerReviews />
                            <hr className="mt-8 mb-4"/>
                            <TrendingBeerReviews />
                            <hr className="mt-8 mb-4"/>
                            <RecentVenueReviews />
                            <hr className="mt-8 mb-4"/>
                            <TrendingVenueReviews />
                            <hr className="mt-8 mb-4"/>

                        </main>

                        <Footer appName={appName} auth={auth} />
                    </div>
                </div>
            </div>
        </>
    );
}
