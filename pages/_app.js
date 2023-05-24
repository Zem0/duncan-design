// `pages/_app.js`
import '../styles/globals.sass';
import '../styles/themes.sass';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}