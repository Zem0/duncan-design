import Colophon from '../Colophon';
import footerStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';
import Music from '../Music';
import ThemeControl from '../ThemeControl';
import React from 'react';

export default function Footer() {
    return(
        <footer className={`${footerStyles.footer} ${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['main-content-padding']}`}>
            <div>
                <Music/>
                <div className={`${footerStyles['footer__copyright']} ${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['gap-15']}`}>
                    <span>© 2023 Duncan Horne</span>
                    <span className={`${footerStyles['footer__spot']}`}>•</span>
                    <Colophon/>
                </div>
            </div>
            <div>
                <ThemeControl/>
            </div>
        </footer>
    );
}