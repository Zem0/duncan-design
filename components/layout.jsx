import Head from 'next/head';
import Image from 'next/image';
import layoutStyles from './layout.module.sass';
import utilStyles from '../styles/utils.module.sass';
import Link from 'next/link';
import ThemeControl from './ThemeControl';
import Navigation from './Navigation';
import ColouredStripes from './ColourdStripes';

const name = 'Duncan Horne';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return (
        <div className={`${layoutStyles.container} ${utilStyles.flex} ${utilStyles['flex-row']}`}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <aside className={`${utilStyles.flex} ${utilStyles['flex-column']} ${utilStyles['space-between']}`}>
                <Image
                    src="/../public/images/webLogo.png"
                    width={60}
                    height={60}
                    priority={true}
                    alt="Duncandesign logo"
                />
                <Navigation/>
                <ThemeControl/>
            </aside>
            <main className={`${utilStyles.flex} ${utilStyles['flex-column']}`}>
                {children}
                <ColouredStripes/>
            </main>
            {/* {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )} */}
        </div>
    );
}
