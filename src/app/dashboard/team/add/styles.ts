import styled from "styled-components";

export const Container = styled.main`
    flex: 1;
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 48px;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 6px 6px 54px 0 rgba(0, 0, 0, 0.05);

    @media (max-width: 600px) {
        padding: 32px 24px;
    }
`;

export const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 48px;

    label:nth-child(2) {
        color: #4379ee;
        font-weight: 600;
        cursor: pointer;
    }

    input {
        display: none;
    }
`;

export const Image = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 100px;
    background-color: #ececee;
    cursor: pointer;
`;

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    width: 100%;

    @media (max-width: 600px) {
        gap: 32px;
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        gap: 24px;
    }
`;

export const submit: React.CSSProperties = {
    marginTop: 40,
    maxWidth: 300,
    width: "100%",
};
