import React from 'react';
import sectionStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function Section({heading, classNames, children, icon, notes}) {
    const Icon = icon;

    return (
        <section className={`${sectionStyles.section} ${utilStyles.flex} ${utilStyles['flex-column']} ${classNames} ${heading && sectionStyles['section--w-heading']} ${notes && sectionStyles['section--notes']}`}>
            <h2 className={`${sectionStyles['section__heading']} ${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['flex-align-center']}`}>
                { heading &&
                    <Icon className={`${sectionStyles['section__icon']}`} weight='fill'/>
                }
                {heading}
            </h2>
            {[children]}
        </section>
    );
}