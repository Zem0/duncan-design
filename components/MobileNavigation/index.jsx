import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Hamburger, IdentificationCard, PencilLine, Placeholder, PenNib } from '@phosphor-icons/react';
import navStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function MobileNavigation() {
    const router = useRouter();
    const navigationListRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getActiveRoute = (router) => {
        return router.pathname;
    };

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
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
        <nav className={`${navStyles.navigation} ${isMenuOpen ? navStyles.menuOpen : ''}`}>
            <ul ref={navigationListRef} className={`${navStyles.navigation__list} ${utilStyles.flex} ${utilStyles['flex-column']}`}>
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
                    <Link className={`${navStyles.option} ${router.asPath.includes('/projects') ? navStyles.active : ''} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-1']}`} href="/projects">
                        <PencilLine weight='fill'/>
                        Work
                    </Link>
                </li>
                <li>
                    <Link className={`${navStyles.option} ${router.asPath.includes('/posts') ? navStyles.active : ''} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-1']}`} href="/posts">
                        <PenNib weight='fill'/>
                        Posts
                    </Link>
                </li>
                <li className={`${navStyles['home-icon']} ${navStyles.option} ${navStyles.toggle} ${utilStyles.flex}`} onClick={handleMenuClick}>
                    <Hamburger weight='fill'/>
                    Menu
                </li>
            </ul>
        </nav>
    );
}