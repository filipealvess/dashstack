import styled from "styled-components";

export const Container = styled.section`
    position: relative;
`;

export const ToggleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
`;

export const ShowMoreButton = styled.button`
    width: 100%;
    padding: 8px;
    border-top: 0.5px solid rgba(151, 151, 151, 0.25);
    color: #a8a8a8;
    font-size: 1.4rem;
    text-align: center;
    transition: color 0.3s;

    &:hover {
        color: #202224;
    }
`;
