import { PageProps } from '@/types';

export default function Footer({ appName }: PageProps<{ appName: string }>) {
    return (
        <footer className="py-8 text-center text-sm text-white font-black bg-gray-600 px-12">
            &copy; {new Date().getFullYear()} {appName}. All rights reserved.
        </footer>
    );
}
