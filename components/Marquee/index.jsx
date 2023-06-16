import React from 'react';
import marqueeStyles from './index.module.sass';
import { Square, Circle, Star, Diamond, Triangle, Hexagon, Seal } from '@phosphor-icons/react';
import utilStyles from './../../styles/utils.module.sass';

export default function marquee() {

    const marqueeItems = [
        {
            'name': 'Icon Design',
            'icon': <Square/>,
        },
        {
            'name': 'Illustration',
            'icon': <Circle/>,
        },
        {
            'name': 'Front End Development',
            'icon': <Star/>,
        },
        {
            'name': 'Wireframing',
            'icon': <Diamond/>,
        },
        {
            'name': 'Prototyping',
            'icon': <Triangle/>,
        },
        {
            'name': 'Comic Design',
            'icon': <Hexagon/>,
        },
        {
            'name': 'Stylesheets',
            'icon': <Seal/>,
        },
    ];

    function MarqueeContent() {
        return (
            <span className={`${marqueeStyles['marquee__content']} ${utilStyles.flex} ${utilStyles['flex-align-center']}`}>
                {
                    React.Children.toArray(
                        marqueeItems.map((marqueeItem) => (
                            <>
                                <p >{marqueeItem.name.toUpperCase()}</p>
                                {marqueeItem.icon}
                            </>
                        ))
                    )
                }
            </span>
        );
    }

    return (
        <div className={`${marqueeStyles.marquee} ${utilStyles.flex} ${utilStyles['flex-align-center']}`}>
            <div className={`${marqueeStyles['marquee__marquee-inner']} ${utilStyles.flex} ${utilStyles['flex-align-center']}`}>
                <MarqueeContent/>
                <MarqueeContent/>
                <MarqueeContent/>
            </div>
        </div>
    );
}