import React from 'react';
import utilStyles from '../../styles/utils.module.sass';
import columnStyles from './index.module.sass';

export default function Columns({children, additionalClasses, noBorder}) {
    return (
        <div className={`${utilStyles.flex} ${utilStyles['flex-row']} ${columnStyles.columns} ${additionalClasses} ${noBorder && columnStyles['columns--no-border']}`}>
            {[children]}
        </div>
    );
}