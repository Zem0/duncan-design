import Link from "next/link";
import { useRouter } from "next/router";
import { Folders, UserSquare, Certificate } from '@phosphor-icons/react';
import navStyles from "./index.module.sass"
import utilStyles from "../../styles/utils.module.sass"

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
        <nav className={`${navStyles.navigation}`}>
            <ul>
                <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == "/posts/first-post" ? navStyles.active : ""} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-6']}`} href="/posts/first-post">
                        <UserSquare weight={getActiveRoute(router) == "/posts/first-post" ? "fill" : "duotone"}/>
                        About
                    </Link>
                </li>
                <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == "/posts/first-post" ? navStyles.active : ""} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-6']}`} href="/posts/first-post">
                        <Folders weight={getActiveRoute(router) == "/posts/first-post" ? "fill" : "duotone"}/>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link className={`${navStyles.option} ${getActiveRoute(router) == "/posts/first-post" ? navStyles.active : ""} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['rounded-m']} ${utilStyles['gap-6']}`} href="/posts/first-post">
                        <Certificate weight={getActiveRoute(router) == "/posts/first-post" ? "fill" : "duotone"}/>
                        CV
                    </Link>
                </li>
            </ul>
        </nav>
    )
}