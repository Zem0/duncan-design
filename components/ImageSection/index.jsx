import React from 'react';
import imageSectionStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function ImageSection({children, additionalClasses}) {
    return (
        <section className={`${imageSectionStyles.imageSection} ${additionalClasses}`}>
            <div className={`${imageSectionStyles['imageSection__img']} ${utilStyles.flex} ${utilStyles['space-between']}`}>
                {children}
            </div>
        </section>
    );
}