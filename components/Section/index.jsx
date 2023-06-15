import React from 'react';
import sectionStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function Section({heading, classNames, children}) {
    return (
        <section className={`${sectionStyles.section} ${utilStyles.flex} ${classNames}`}>
            <h2 className={`${sectionStyles['section__heading']}`}>{heading}</h2>
            {children}
        </section>
    );
}