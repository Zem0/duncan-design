import React from 'react';
import Head from 'next/head';
import layoutStyles from './layout.module.sass';
import utilStyles from '../styles/utils.module.sass';
// import Navigation from './Navigation';
// import SiteTitle from './SiteTitle';
import FooterContent from './Footer';
import Link from 'next/link';
// import Marquee from './Marquee';

export const siteTitle = 'Duncan Design';

export default function Layout({ children, home }) {
    return (
        <div className={`${layoutStyles.container} ${utilStyles.flex} ${utilStyles['flex-column']}`}>
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
            {/* <header className={`${utilStyles.flex}`}>
                <div className={`${layoutStyles['header-cover-gradient']}`}></div>
                <div className={`${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['flex-align-baseline']} ${utilStyles['fg-1']} ${utilStyles['space-between']}`}>
                    <SiteTitle/>
                    <Navigation/>
                </div>
            </header> */}
            <div className={`${layoutStyles['page-holder']} ${utilStyles.flex} ${utilStyles['flex-column']}`}>
                <main className={`${utilStyles.flex} ${utilStyles['flex-column']} ${layoutStyles['main-content-holder']}`}>
                    <div className={`${layoutStyles['main-content']} ${utilStyles.flex} ${utilStyles['flex-column']}`}>
                        {children}
                        {!home && (
                            <div>
                                <Link href="/">← Back to home</Link>
                            </div>
                        )}
                    </div>
                </main>
                {/* <Marquee/> */}
                <FooterContent/>
            </div>
        </div>
    );
}
