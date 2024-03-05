import { React, useEffect, useState } from 'react';
import utilStyles from '../../styles/utils.module.sass';
import stickerStyles from './index.module.sass';
import HelloText from '../HelloText';
import Image from 'next/image';

export default function Stickers() {
    const stickers = [
        {
            'name': 'Flash',
            'url': 'https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/flash-sticker.png'
        },
        {
            'name': 'Batman',
            'url': 'https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/batman-sticker.png'
        },
        {
            'name': 'Spidey',
            'url': 'https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/spidey-sticker.png?t=2024-03-05T10%3A52%3A36.066Z'
        }
    ];

    const [randomNumber, setRandomNumber] = useState(0);

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * stickers.length);
        setRandomNumber(randomNumber);
    };

    useEffect(() => {
        generateRandomNumber();
    }, []);

    return (
        <div className={`${utilStyles.flex} ${utilStyles['flex-column']} ${utilStyles['flex-justify-center']} ${stickerStyles.stickers}`}>
            <div className={`${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['flex-align-baseline']}`}>
            <Image
                    src={stickers[randomNumber].url}
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