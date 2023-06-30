import Image from 'next/image';
import photo from '../../public/images/me.jpg';
import { SealCheck } from '@phosphor-icons/react';
import polaroidStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function Polaroid() {
    return (
        <div className={`${polaroidStyles.polaroid}`}>
            <Image
                src={photo}
                // width={320}
                priority={true}
                alt='A picture of Duncan Horne at MCM comic con'
                className={`${polaroidStyles['polaroid__photo']}`}
            />
            <h1 className={`${polaroidStyles['polaroid__heading']} ${utilStyles.flex} ${utilStyles['flex-align-baseline']}`}>
                Duncan
                <SealCheck className={`${polaroidStyles['polaroid__verified-icon']}`} weight='fill'/>
                <span className={`${polaroidStyles['polaroid__location']}`}>W Sussex, UK</span>
            </h1>
            <p>Designer, Front-end Developer &amp; some other things in between</p>
        </div>
    );
}