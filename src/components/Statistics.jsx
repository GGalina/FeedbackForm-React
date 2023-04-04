import { nanoid } from 'nanoid';
import { StatContainer, StatItem } from './Feedback.styled';

export const Statistics = ({ stats, total, positiveFeedback }) => {
    return (
        <StatContainer>
            {Object.entries(stats).map(([key, value]) => {
                return (
                    <StatItem key={nanoid()}>
                        {key}: {value}
                    </StatItem>
                )
            })}
            <StatItem>Total: {total}</StatItem>
            <StatItem>Positive feedback: {positiveFeedback} %</StatItem>
        </StatContainer>
    );
};