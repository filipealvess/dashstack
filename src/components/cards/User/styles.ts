import Image from "next/image";
import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 40px 24px;
    border-radius: 16px;
    background-color: #ffffff;
    box-shadow: 6px 6px 54px 0 rgba(0, 0, 0, 0.05);
`;

export const Avatar = styled(Image)`
    margin-bottom: 24px;
    border-radius: 100px;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;

    * {
        color: #202224;
        text-align: center;
    }

    strong {
        font-weight: 700;
    }

    p {
        margin: 4px 0 8px;
        font-size: 1.4rem;
        font-weight: 600;
        opacity: 0.6;
    }

    span {
        font-size: 1.4rem;
        opacity: 0.8;
        overflow-wrap: anywhere;
    }
`;
