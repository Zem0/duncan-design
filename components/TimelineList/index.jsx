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
            'role': 'Product Champion',
            'date': '01/2019 - 01/2023',
            'description': 'Along side my dev role I was also given the opportunity to become the product champion for one of the applications in the company&apos;s portfolio of software.'
        },
        {
            'company': 'Shelton Development Services',
            'role': 'Front-End Developer',
            'date': '01/2015 - 06/2023',
            'description': 'I worked within the dev team to help with creating the front-end for the web applications that the company produced, using frameworks such as Angular JS and React. Having the most experience with CSS and SASS in the team, a lot of my focus was working with these technologies as well as peer reviewing and guiding (or quacking for) other members of the team.'
        },
        {
            'company': 'Shelton Development Services',
            'role': 'Graphic Designer',
            'date': '01/2014 - 01/2015',
            'description': 'I began my design career at SDS designing e-shots, brochures and a refresh of the company&apos;s logo amongst other things. Working in the Dev team lead me to start coding, initially learning HTML, CSS, Javascript and JQuery. i was then asked to design and implement a refresh of the SDS website'
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