import React from 'react';
import Head from 'next/head';
import layoutStyles from './layout.module.sass';
import utilStyles from '../styles/utils.module.sass';
import FooterContent from './Footer';

export const siteTitle = 'Duncan Design';

export default function Layout({ children, home, additionalClassName }) {
    return (
        <div className={`${layoutStyles.container} ${utilStyles.flex} ${utilStyles['flex-column']}`}>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <meta
                    name="description"
                    content="Duncan Horne - Designer & Front-end Developer specialising in UI, UX and Icon design"
                />
                <meta
                    property="og:image"
                    content="https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/OGimage.png"
                />
                <meta name="og:title" content="Duncan Horne" />
                <meta name="og:site_name" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className={`${layoutStyles['page-holder']} ${utilStyles.flex} ${utilStyles['flex-column']}`}>
                <main className={`${utilStyles.flex} ${utilStyles['flex-column']} ${layoutStyles['main-content-holder']} ${additionalClassName}`}>
                    <div className={`${layoutStyles['main-content']} ${utilStyles.flex} ${utilStyles['flex-column']}`}>
                        {children}
                    </div>
                </main>
                <FooterContent/>
            </div>
        </div>
    );
}
