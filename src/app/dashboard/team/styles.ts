import styled from "styled-components";

export const Container = styled.main`
    padding: 24px;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h1 {
        font-size: 2.4rem;
        font-weight: 700;
    }
`;

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    max-width: 100%;

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;
