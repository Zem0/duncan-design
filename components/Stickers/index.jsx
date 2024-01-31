import React from 'react';
import utilStyles from '../../styles/utils.module.sass';
import stickerStyles from './index.module.sass';
import HelloText from '../HelloText';
import Image from 'next/image';

export default function Stickers() {
    return (
        <div className={`${utilStyles.flex} ${utilStyles['flex-column']} ${utilStyles['flex-justify-center']} ${stickerStyles.stickers}`}>
            <div className={`${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['flex-align-baseline']}`}>
            <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/flash-sticker.png'
                    width={682}
                    height={820}
                    priority={true}
                    alt='A picture of Duncan Horne at MCM comic con'
                    className={`${stickerStyles.flash}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/logo-sticker.png'
                    width={310}
                    height={320}
                    priority={true}
                    alt='A picture of Duncan Horne at MCM comic con'
                    className={`${stickerStyles.logo}`}
                />

            </div>
            <HelloText className={`${stickerStyles['hello-sticker']}`} />
        </div>
    );
}