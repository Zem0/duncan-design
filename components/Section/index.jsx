import React from 'react';
import sectionStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function Section({heading, pageHeading, className, children, icon, id, notes}) {
    const Icon = icon;

    return (
        <section id={id} className={`${sectionStyles.section} ${utilStyles.flex} ${utilStyles['flex-column']} ${className} ${(heading || pageHeading) && sectionStyles['section--w-heading']} ${notes && sectionStyles['section--notes']} ${sectionStyles['section--' + heading]}`}>
            { heading &&
                <h2 className={`${sectionStyles['section__heading']} ${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['flex-align-start']}`}>
                    <Icon className={`${sectionStyles['section__icon']}`} weight='fill'/>
                    {heading}
                </h2>
            }
            {
                pageHeading &&
                <h1 className={`${sectionStyles['section__page-heading']} ${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['flex-align-start']}`}>
                    {pageHeading}
                </h1>
            }
            {[children]}
        </section>
    );
}