// import Colophon from '../Colophon';
import footerStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';
import Music from '../Music';
import { DribbbleLogo, TwitterLogo, Link, EnvelopeOpen } from '@phosphor-icons/react';
// import ThemeControl from '../ThemeControl';
import React from 'react';

export default function Footer() {
    return(
        <footer className={`${footerStyles.footer} ${utilStyles.grid} ${utilStyles['grid-area-main']}`}>
            <div className={`${footerStyles['footer__content']} ${utilStyles['grid-area-main']}`}>
                <div className={`${footerStyles['footer__music']}`}>
                    <Music/>
                    <span>©2014-2024 Duncan Horne</span>
                    {/* <span className={`${footerStyles['footer__spot']}`}>•</span>
                    <Colophon/> */}
                </div>
                <div className={`${footerStyles['footer__links']} ${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['gap-15']}`}>
                    <ul className={`${footerStyles['footer__links__list']}`}>
                        <li><h6>Elsewhere</h6></li>
                        <li><a href='https://mastodon.design/@duncandesi9n' target='_blank'><Link weight='fill'/> Mastodon</a></li>
                        <li><a href='https://dribbble.com/DuncanDesign' target='_blank'><DribbbleLogo weight='fill'/> Dribbble</a></li>
                        <li><a href='https://instagram.com/duncandesi9n' target='_blank'><TwitterLogo weight='fill'/> Twitter</a></li>
                        <li><a href='mailto:duncan@duncandesign.online'><EnvelopeOpen weight='fill'/> duncan@duncandesign.online</a></li>
                    </ul>
                </div>
            </div>
            {/* <div>
                <ThemeControl/>
            </div> */}
        </footer>
    );
}