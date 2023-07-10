import React from 'react';
// import rowWrapperStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function RowWrapper({children}) {
    return (
        <div className={`${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['gap-main-flow']}`}>
            {[children]}
        </div>
    );
}