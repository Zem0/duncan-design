import React from 'react';
import macChromeStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function MacChrome({children}) {
    return (
        <div className={`${macChromeStyles.chrome} ${utilStyles.flex} ${utilStyles['flex-column']} ${utilStyles['gap-15']}`}>
            <div className={`${macChromeStyles['chrome__title-bar']} ${utilStyles.flex} ${utilStyles['flex-row']}`}>
                <div className={`${macChromeStyles['chrome__controls']} ${macChromeStyles['chrome__controls--red']}`}></div>
                <div className={`${macChromeStyles['chrome__controls']} ${macChromeStyles['chrome__controls--yellow']}`}></div>
                <div className={`${macChromeStyles['chrome__controls']} ${macChromeStyles['chrome__controls--green']}`}></div>
            </div>
            <div className={`${macChromeStyles['chrome__content-holder']}`}>
                {[children]}
            </div>
        </div>
    );
}