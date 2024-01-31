import React from 'react';
import utilStyles from '../../styles/utils.module.sass';
import columnStyles from './index.module.sass';

export default function Columns({children, additionalClasses}) {
    return (
        <div className={`${utilStyles.flex} ${utilStyles['flex-row']} ${columnStyles.columns} ${additionalClasses}`}>
            {[children]}
        </div>
    );
}