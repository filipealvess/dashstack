import styled from "styled-components";

export const Container = styled.button`
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #4880ff;
    color: #ffffff;
    font-weight: 600;
    transition: 0.3s opacity;

    &:disabled {
        opacity: 0.75;
        cursor: not-allowed;
    }
`;
