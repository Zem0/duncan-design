import Section from '../Section';
import { styled } from 'styled-components';

const SquareCard = styled(Section).attrs(props => ({
    className: props.className,
}))`
    width: calc(50% - 1.5rem);
    aspect-ratio: 1 / 1;
`;

export default SquareCard;
