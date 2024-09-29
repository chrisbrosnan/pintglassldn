import './bootstrap';
import '../css/app.css';
import ReactGA from 'react-ga';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName     = import.meta.env.VITE_APP_NAME || 'Laravel';
const TRACKING_ID = 'G-XFZH16DF04';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        ReactGA.initialize(TRACKING_ID);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
