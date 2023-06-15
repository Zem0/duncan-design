// `pages/_app.js`
import '../styles/globals.sass';
import '../styles/themes.sass';
import { useEffect, React } from 'react';

export default function App({ Component, pageProps }) {

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') ?? null;
        if (storedTheme) {
            document.documentElement.setAttribute('data-theme', storedTheme);
        }
    }, []);

    return <Component {...pageProps} />;
}