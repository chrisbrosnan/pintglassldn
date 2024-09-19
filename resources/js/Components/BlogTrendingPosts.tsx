export default function BlogTrendingPosts() {
    return (
        <div>
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-8 lg:px-12 pb-4">
                <h2 className="font-black text-lg">Trending Posts</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-8 lg:px-12">
                <a href={route('blog.index')} >
                    <div className="flex items-center justify-between pb-3">
                        <img src="https://via.placeholder.com/800x400" alt="Screenshot of the application" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <h2 className="font-black pb-3">Recent Post</h2>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                    <button className="bg-gray-400 hover:bg-blue-200 text-white font-bold p-2 text-xs rounded">Read More</button>
                </a>
                <a href={route('blog.index')} >
                    <div className="flex items-center justify-between pb-3">
                        <img src="https://via.placeholder.com/800x400" alt="Screenshot of the application" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <h2 className="font-black pb-3">Recent Post</h2>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                    <button className="bg-gray-400 hover:bg-blue-200 text-white font-bold p-2 text-xs rounded">Read More</button>
                </a>
                <a href={route('blog.index')} >
                    <div className="flex items-center justify-between pb-3">
                        <img src="https://via.placeholder.com/800x400" alt="Screenshot of the application" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <h2 className="font-black pb-3">Recent Post</h2>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                    <button className="bg-gray-400 hover:bg-blue-200 text-white font-bold p-2 text-xs rounded">Read More</button>
                </a>
                <a href={route('blog.index')} >
                    <div className="flex items-center justify-between pb-3">
                        <img src="https://via.placeholder.com/800x400" alt="Screenshot of the application" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <h2 className="font-black pb-3">Recent Post</h2>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                    <button className="bg-gray-400 hover:bg-blue-200 text-white font-bold p-2 text-xs rounded">Read More</button>
                </a>
            </div>
        </div>
    );
}
