import styled from "styled-components";
import { Container as Dropdown } from "@/components/Dropdown/styles";

export const Container = styled.section`
    position: relative;

    @media (max-width: 400px) {
        position: static;

        ${Dropdown} {
            left: 0;
            top: 60px;
            margin: 0 16px;
            width: calc(100% - 32px);
        }
    }
`;

export const ToggleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
`;
