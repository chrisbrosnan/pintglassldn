import { PageProps } from '@/types';
import { Link } from '@inertiajs/react';

export default function Header({ auth, appName }: PageProps<{ appName: string }>) {
    return (
        <header className="grid grid-cols-2 items-center gap-2 py-3 lg:grid-cols-3 bg-gray-600 px-12">
            <nav className="-mx-3 flex flex-1 px-12">
                <Link
                    href={route('blog.index')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Blog
                </Link>
                <Link
                    href={route('beverages.index')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Beverages
                </Link>
                <Link
                    href={route('venues.index')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Venues
                </Link>
            </nav>
            <div className="flex lg:justify-center lg:col-start-2">
                <Link href={route('welcome')} className="text-white font-black">
                    <img src="/pgldn-logo.png" alt="Pintglass LDN" className="w-12 h-12" />
                </Link>
            </div>
            <nav className="-mx-3 flex flex-1 justify-end">
                {/* {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link>
                    </>
                )} */}
            </nav>
        </header>
    );
}
