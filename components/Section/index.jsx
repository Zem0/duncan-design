import React from 'react';
import sectionStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function Section({heading, className, children, icon, notes}) {
    const Icon = icon;

    return (
        <section className={`${sectionStyles.section} ${utilStyles.flex} ${utilStyles['flex-column']} ${className} ${heading && sectionStyles['section--w-heading']} ${notes && sectionStyles['section--notes']} ${sectionStyles['section--' + heading]}`}>
            { heading &&
                <h2 className={`${sectionStyles['section__heading']} ${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['flex-align-start']}`}>
                    <Icon className={`${sectionStyles['section__icon']}`} weight='fill'/>
                    {heading}
                </h2>
            }
            {[children]}
        </section>
    );
}