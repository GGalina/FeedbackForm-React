import styled from 'styled-components';

export const Card = styled.div`
    width: 500px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #EDC7B7;
    background-color: #EDC7B7;
`;

export const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
`;

export const BtnContainer = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
`;

export const Btn = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: bold;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
    padding: 12px 42px;
    cursor: pointer;
    color: #2C3531;
    text-transform: capitalize;
    &[value=good] {
        background-color: #8dd27f;
        border: 1px solid #8dd27f;
        &:hover {
            background-color: #5ab946;
            border: 1px solid #5ab946;
        }
    }
    &[value=neutral] {
        background-color: #F5f174;
        border: 1px solid #F5f174;
        &:hover {
            background-color: #F3ed24;
            border: 1px solid #F3ed24;
        }
    }
    &[value=bad] {
        background-color: #F39494;
        border: 1px solid #F39494;
        &:hover {
            background-color: #Fd3e3e;
            border: 1px solid #Fd3e3e;
        }
    }
`;

export const SubTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: normal;
`;

export const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    padding-left: 22px;
    padding-right: 22px;
    padding-bottom: 24px;
`;

export const StatItem = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #272727;
    text-transform: capitalize;
    padding-top: 10px;  
    display: flex;
    justify-content: space-between;
`;

export const Key = styled.span`
    display: flex;
    align-items: flex-start;
    padding-right: 10px;
`; 

export const Dots = styled.span`
    font-size: 24px;
    display: flex;
    flex-grow: 1;
    border-bottom: 1px dotted #272727;
    justify-content: baseline;
`;

export const Amount = styled.span`
    display: flex;
    align-items: flex-end;
    padding-left: 10px;
`;