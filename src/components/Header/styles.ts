import styled from "styled-components";
import { Container as SearchInput } from "@/components/form/Input/Search/styles";

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    background-color: #ffffff;
`;

export const Main = styled.section`
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
`;

export const Content = styled.section`
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;

    @media (max-width: 450px) {
        ${SearchInput} {
            display: none;
        }
    }
`;

export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
`;

export const SearchButton = styled.button`
    display: none;

    @media (max-width: 450px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    }
`;

export const Footer = styled.footer`
    display: none;

    ${SearchInput} {
        max-width: none;
    }

    @media (max-width: 450px) {
        display: block;
        margin-top: 16px;
    }
`;
