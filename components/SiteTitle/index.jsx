import titleStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';
import Image from 'next/image';
import logo from '../../public/images/webLogo3.png';

export default function SiteTitle() {
    return (
        <div className={`${titleStyles['site-title']} ${utilStyles.flex} ${utilStyles['fully-aligned']} ${utilStyles['z-1']}`}>
            <Image
                src={logo}
                width={40}
                height={40}
                priority={true}
                alt="Duncandesign logo"
            />
            <div className={`${titleStyles.splitter}`}></div>
            <div className={`${utilStyles.flex} ${utilStyles['flex-column']} ${titleStyles['site-name']}`}>
                <h1>DUNCAN</h1>
                <h1>DESIGN</h1>
            </div>
        </div>
    );
}