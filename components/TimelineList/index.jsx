import React from 'react';
import timelineListStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function TimelineList() {
    const work = [
        {
            'role': 'Freelance Icon Designer',
            'date': '2022 - Present',
            'description': 'In my spare time I freelance as an icon designer and have designed icons for apps with a combine total of over 320,000 downloads.'
        },
        {
            'company': 'Shelton Development Services',
            'role': 'Project Manager',
            'date': 'Jan 2019 - Jan 2023',
            'description': 'Along side my design role I was also given the opportunity to become the project manager for one of the applications in the company\'s portfolio of software.'
        },
        {
            'company': 'Shelton Development Services',
            'role': 'UI Designer and Developer',
            'date': 'Jan 2015 - Jun 2023',
            'description': 'I helped the team design and implement the UI for two of the leading web applications the company produces for the social housing sector, collaborating within a design team of 4 colleagues and an engineering team of 12. Having the most experience with CSS and SASS in the team, a lot of my focus was working with these technologies as well as peer reviewing and guiding (or quacking 🦆 for) other members of the team.'
        },
        {
            'company': 'Shelton Development Services',
            'role': 'Graphic Designer',
            'date': 'Jan 2014 - Jan 2015',
            'description': 'I began my design career at SDS designing e-shots, brochures and a refresh of the company\'s logo amongst other things. Working in the Dev team lead me to start coding, initially learning HTML, CSS, Javascript and JQuery. I was then asked to design and implement a refresh of the SDS website'
        }
    ];
    return (
        <ul role='list' className={`${timelineListStyles.timeline}`}>
            {
                React.Children.toArray(
                    work.map((workItem) => (
                        <>
                            <li className={`${timelineListStyles['timeline__item']} ${utilStyles.grid}`}>
                                <div className={`${timelineListStyles['timeline__dot']}`}></div>
                                <div className={`${timelineListStyles['timeline__content']} ${utilStyles.flex} ${utilStyles['flex-column']}`}>
                                    <h2 className={`${timelineListStyles['timeline__heading']}`}>{workItem.role}</h2>
                                    <span>{workItem.company}</span>
                                    <span className={`${utilStyles['mono-type']} ${timelineListStyles['timeline__date']}`}>{workItem.date}</span>
                                    <p>{workItem.description}</p>
                                </div>
                            </li>
                        </>
                    ))
                )
            }
        </ul>
    );
}