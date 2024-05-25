import styled from "styled-components";

export const Container = styled.article`
    position: absolute;
    top: 150%;
    right: -10px;
    width: 280px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 9px 40px 0 rgba(0, 0, 0, 0.06);
`;

export const Header = styled.header`
    padding: 16px 20px;
    border-bottom: 0.5px solid rgba(151, 151, 151, 0.25);

    p {
        color: #202224;
    }
`;

export const List = styled.ul`
    &:hover {
        > li:not(:hover) {
            opacity: 0.5;
        }
    }
`;

export const Item = styled.li`
    padding: 8px 20px;
    transition: opacity, 0.3s;
    cursor: pointer;

    p {
        color: #202224;
        font-size: 1.4rem;
        font-weight: 600;
    }

    span {
        color: #404040;
        font-size: 1.2rem;
        font-weight: 400;
    }
`;
