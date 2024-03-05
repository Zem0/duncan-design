import utilStyles from '../../styles/utils.module.sass';
import musicStyles from './index.module.sass';
import AppleMusicLogo from '../../public/images/appleMusic.svg';
import { React, useEffect, useState } from 'react';

export default function Music() {
    const tracks = [
        {
            'name': 'Eyes of Madness',
            'artist': 'Dance With the Dead',
            'url': 'https://music.apple.com/us/album/eyes-of-madness/1082177212?i=1082177220'
        },
        {
            'name': 'Job Well Done',
            'artist': 'Run The Jewels',
            'url': 'https://music.apple.com/us/album/job-well-done-feat-until-the-ribbon-breaks/1598945321?i=1598945327'
        },
        {
            'name': 'She Sells Sanctuary',
            'artist': 'The Cult',
            'url': 'https://music.apple.com/us/album/she-sells-sanctuary/1028833323?i=1028833873'
        },
        {
            'name': 'Regulate',
            'artist': 'Warren G',
            'url': 'https://music.apple.com/us/album/regulate-feat-nate-dogg/1452811329?i=1452811341'
        },
        {
            'name': 'Tokyo Drifting',
            'artist': 'Glass Animals',
            'url': 'https://music.apple.com/us/album/tokyo-drifting/1508562310?i=1508562321'
        },
        {
            'name': 'The Justice Society Theme (from "Black Adam")',
            'artist': 'Lorne Balfe',
            'url': 'https://music.apple.com/us/album/the-justice-society-theme-from-black-adam/1648154147?i=1648154817'
        }
    ];

    const [randomNumber, setRandomNumber] = useState(0);

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * tracks.length);
        setRandomNumber(randomNumber);
    };

    useEffect(() => {
        generateRandomNumber();
    }, []);

    return (
        <div className={`${musicStyles['music-info-holder']} ${utilStyles.flex} ${utilStyles['flex-align-center']} ${utilStyles['gap-15']}`}>
            <AppleMusicLogo className={`${musicStyles['music-info-holder__apple-logo']}`}/>
            <div className={`${musicStyles['music-info-holder__info']}`}>
                <div>On repeat</div>
                <a href={tracks[randomNumber].url} target="_blank">
                    <div className={`${musicStyles['music-info-holder__track']}`}>{tracks[randomNumber].name} by {tracks[randomNumber].artist}</div>
                </a>
            </div>
        </div>
    );
}