import styled from 'styled-components';

export const ContributionsFooter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 670px;
    font-size: 12px;
`;

export const ColorsList = styled.ul`
    display: inline-block;
    list-style: none;

    &:before {
        content: "Less";
        margin: 0 5px;
    }

    &:after {
        content: "More";
        margin: 0 5px;
    }

    & > li {
        width: 10px;
        height: 10px;
        display: inline-block;
        margin: 0 2px;
    }
`;
