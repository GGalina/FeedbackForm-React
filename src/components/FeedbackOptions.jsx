import { nanoid } from 'nanoid';
import { BtnContainer, Btn } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const values = Object.keys(options);
    return (
        <BtnContainer>
            {values.map(value => (
                <Btn
                    key={nanoid()}
                    value={value}
                    name={value}
                    onClick={event => onLeaveFeedback(event)}
                    type="button"
                >
                    {value}
                </Btn>
            ))}
        </BtnContainer>
    );
};