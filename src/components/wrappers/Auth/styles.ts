import styled from "styled-components";

export const Container = styled.main`
    min-height: 100vh;
    padding: 40px 24px;
    background-color: #4880ff;
    overflow-x: hidden;
`;

export const Content = styled.section`
    max-width: 600px;
    margin: 0 auto;
    padding: 64px 56px;
    border-radius: 24px;
    background-color: #ffffff;
`;

export const Title = styled.h1`
    margin-bottom: 16px;
    color: #202224;
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
`;

export const Subtitle = styled.h2`
    margin-bottom: 40px;
    color: #202224;
    text-align: center;
`;

export const Navigation = styled.section`
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;

    p {
        color: #202224;
    }

    a {
        color: #5a8cff;
        font-weight: 600;
        text-decoration: underline;
    }
`;
