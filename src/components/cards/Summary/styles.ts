import styled, { css } from "styled-components";

import type {
    IFooterProps,
    IHeaderProps,
} from "@/components/cards/Summary/styles.d";

export const Container = styled.article`
    padding: 16px;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 6px 6px 54px 0 rgba(0, 0, 0, 0.05);
`;

export const Header = styled.header<IHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    /* icon container */
    div {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 8px;

        ${({ $color }) => css`
            background-color: ${$color}15;

            svg {
                width: 20px;
                height: 20px;
                color: ${$color};
            }
        `}
    }

    /* card title */
    p {
        color: #202224;
    }
`;

export const Value = styled.p`
    margin: 16px 0 24px;
    font-size: 2.4rem;
    font-weight: 700;
`;

export const Footer = styled.footer<IFooterProps>`
    display: flex;
    align-items: center;
    gap: 8px;

    * {
        font-size: 1.2rem;
    }

    div {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    span {
        color: ${({ $trend }) => ($trend === "up" ? "#00B69B" : "#F93C65")};
        font-weight: 600;
    }

    p {
        color: #606060;
    }
`;
