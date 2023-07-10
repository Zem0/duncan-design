import SquareCard from '../SquareCard';
import utilStyles from '../../styles/utils.module.sass';
import filesCardStyles from './index.module.sass';
import Squircle from '../Squircle';
import Image from 'next/image';
import Batman from '../../public/images/batman.png';
import Polaroid from '../../public/images/polaroid.png';

function FileItem({src, alt, heading, subheading, url}) {
    return (
        <a href={url} target='_blank' className={`${utilStyles.flex} ${utilStyles['flex-1']} ${filesCardStyles['file-item__link']}`}>
            <div className={`${filesCardStyles['file-item']} ${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['gap-15']}`}>
                <Image
                    src={src}
                    priority={true}
                    alt={alt}
                    className={`${filesCardStyles['file-item__img']}`}
                />
                <Squircle />
                <div className={`${utilStyles.flex} ${utilStyles['flex-column']}`}>
                    <h3>{heading}</h3>
                    <p className={`${filesCardStyles['file-item__subheading']}`}>{subheading}</p>
                </div>
            </div>
        </a>
    );
}

export default function FilesCard() {
    return (
        <SquareCard className={`${filesCardStyles.card}`}>
            <FileItem
                alt='Illustration of Batman wearing sunglasses'
                heading='Avatars'
                subheading='Comic profile images'
                src={Batman}
                url='https://duncandesign.gumroad.com/l/headshots?_gl=1*1vqgjht*_ga*MTc4MDg1NTA1OC4xNjg3NDY2MTU5*_ga_6LJN6D94N6*MTY4ODM5ODEzMC4yLjEuMTY4ODM5ODIyOC4wLjAuMA..'
            />
            <FileItem
                alt='Image showing a Polaroid camera app icon design'
                heading='Polaroid'
                subheading='Custom App Icon'
                src={Polaroid}
                url='https://duncandesign.gumroad.com/l/polaroid?_gl=1*ptybjm*_ga*MTc4MDg1NTA1OC4xNjg3NDY2MTU5*_ga_6LJN6D94N6*MTY4ODM5ODEzMC4yLjEuMTY4ODM5ODE4MC4wLjAuMA..'
            />
        </SquareCard>
    );
}