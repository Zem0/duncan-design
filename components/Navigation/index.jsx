import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { Briefcase, IdentificationCard, PencilLine, Placeholder, PenNib } from '@phosphor-icons/react';
import navStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function Navigation() {
    const router = useRouter();
    const navigationListRef = useRef(null);

    const getActiveRoute = (router) => {
        return router.pathname;
    };

    useEffect(() => {
        // Detect if the browser is Safari
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            // Add a class to the navigation list if it's Safari
            if (navigationListRef.current) {
                navigationListRef.current.classList.add(navStyles['safari-specific']);
            }
        }
    }, []);

    return (
        <nav className={`${navStyles.navigation}`}>
            <ul ref={navigationListRef} className={`${navStyles.navigation__list} ${utilStyles.flex} ${utilStyles['flex-row']}`}>
                <li className={`${navStyles['home-icon']}`}>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == '/' ? navStyles.active : ''} ${navStyles.home} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-1']}`} href="/">
                        <Placeholder weight='fill'/>
                    </Link>
                </li>
                <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == '/posts/first-post' ? navStyles.active : ''} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-1']}`} href="/#about">
                        <IdentificationCard weight='fill'/>
                        About
                    </Link>
                </li>
                <li>
                    <Link className={`${navStyles.option} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-1']}`} href="/#work">
                        <Briefcase weight='fill'/>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == '/projects' ? navStyles.active : ''} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-1']}`} href="/projects">
                        <PencilLine weight='fill'/>
                        Work
                    </Link>
                </li>
                <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == '/posts' ? navStyles.active : ''} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-1']}`} href="/posts">
                        <PenNib weight='fill'/>
                        Posts
                    </Link>
                </li>
            </ul>
        </nav>
    );
}