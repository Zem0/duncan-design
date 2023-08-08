import Link from 'next/link';
import { useRouter } from 'next/router';
import { Briefcase, IdentificationCard, Images } from '@phosphor-icons/react';
import navStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';
// import MastodonLogo from '../../public/images/mastodon1.svg';

export default function Navigation() {


    // const activePath = router.pathname

    // const linkMap = {
    //     about: {
    //         pathName: "/about",
    //         icon: iconMap.user
    //     }
    // }

    // const iconMap = {
    //     user: {
    //         component: <UserSquare weight={active == href ? "fill" : "duotone"}/>
    //     },
    //     about: {
    //         component: <Folders/>
    //     }
    // }
    const router = useRouter();

    const getActiveRoute = (router) => {
        return router.pathname;
    };



    // function NavOption(children, href, optionName) {


    //     return(
    //         <Link href={href} className={getActiveRoute(router) == href ? "active" : ""}>{children}{optionName}</Link>
    //     )
    // }

    return (
        <nav className={`${navStyles.navigation} ${utilStyles.flex} ${utilStyles['flex-justify-end']}`}>
            <ul className={`${navStyles.navigation__list} ${utilStyles.flex} ${utilStyles['flex-row']}`}>
                <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == '/posts/first-post' ? navStyles.active : ''} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-6']}`} href="#about">
                        <IdentificationCard weight='fill'/>
                        About
                    </Link>
                </li>
                <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == '/projects' ? navStyles.active : ''} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-6']}`} href="#work">
                        <Briefcase weight='fill'/>
                        Work
                    </Link>
                </li>
                {/* <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == '/projects' ? navStyles.active : ''} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-6']}`} href="#projects">
                        <Images weight='fill'/>
                        Projects
                    </Link>
                </li> */}
            </ul>
            {/* <h3 className={`${navStyles.subtitle}`}>FIND ME HERE</h3>
            <ul>
                <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == "/projects" ? navStyles.active : ""} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-6']}`} href="https://mastodon.design/@duncandesi9n" target="_blank">
                        <MastodonLogo className={`${utilStyles['fill-white']} ${navStyles['custom-svg-icon']}`}/>
                        Mastodon
                    </Link>
                </li>
                <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == "/projects" ? navStyles.active : ""} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-6']}`} href="https://dribbble.com/DuncanDesign" target="_blank">
                        <DribbbleLogo weight={getActiveRoute(router) == "/posts/first-post" ? "fill" : "duotone"}/>
                        Dribbble
                    </Link>
                </li>
                <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == "/projects" ? navStyles.active : ""} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-6']}`} href="https://twitter.com/duncandesi9n" target="_blank">
                        <TwitterLogo weight={getActiveRoute(router) == "/posts/first-post" ? "fill" : "duotone"}/>
                        Twitter
                    </Link>
                </li>
            </ul> */}
        </nav>
    );
}