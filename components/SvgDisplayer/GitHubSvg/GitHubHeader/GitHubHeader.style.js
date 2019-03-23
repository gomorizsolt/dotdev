import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 670px;
`;

export const ColorsList = styled.ul`
    list-style: none;
    font-size: 12px;

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
