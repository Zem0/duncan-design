import React from 'react';
import sectionStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function Section({heading, pageHeading, className, children, icon, id, notes}) {
    const Icon = icon;

    return (
        <section className={`${sectionStyles.section}`}>
            <div id={id} className={`${sectionStyles.card} ${utilStyles.flex} ${utilStyles['flex-column']} ${className} ${(heading || pageHeading) && sectionStyles['card--w-heading']} ${notes && sectionStyles['card--notes']} ${sectionStyles['card--' + heading]}`}>
                { heading &&
                    <h2 className={`${sectionStyles['card__heading']} ${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['flex-align-start']}`}>
                        <Icon className={`${sectionStyles['card__icon']}`} weight='fill'/>
                        {heading}
                    </h2>
                }
                {
                    pageHeading &&
                    <h1 className={`${sectionStyles['card__page-heading']} ${utilStyles.flex} ${utilStyles['flex-row']} ${utilStyles['flex-align-start']}`}>
                        {pageHeading}
                    </h1>
                }
                {[children]}
            </div>
        </section>
    );
}