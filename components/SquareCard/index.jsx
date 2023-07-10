'use client';

import Section from '../Section';
import { styled } from 'styled-components';
import squareCardStyles from  './index.module.sass';

const Card = styled(Section).attrs(props => ({
    className: props.className,
}))`
    aspect-ratio: 1 / 1;
`;

const SquareCard = ({children, className}) => {
    return (
        <div className={`${squareCardStyles['card-holder']} ${className}`}>
            <Card>{children}</Card>
        </div>
    );
};

export default SquareCard;
