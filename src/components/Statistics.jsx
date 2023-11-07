import { nanoid } from 'nanoid';
import { StatContainer, StatItem, Key, Dots, Amount} from './Feedback.styled';

export const Statistics = ({ stats, total, positiveFeedback }) => {
    return (
        <StatContainer>
            {Object.entries(stats).map(([key, value]) => {
                return (
                    <StatItem key={nanoid()}>
                        <Key>{key}:</Key><Dots/><Amount>{value}</Amount>
                    </StatItem>
                )
            })}
            <StatItem><Key>Total:</Key><Dots/><Amount>{total}</Amount></StatItem>
            <StatItem><Key>Positive feedback:</Key><Dots/><Amount>{positiveFeedback} %</Amount></StatItem>
        </StatContainer>
    );
};