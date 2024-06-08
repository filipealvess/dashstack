import NextLink from "next/link";
import styled, { css } from "styled-components";

import type { ILinkProps } from "@/components/Sidebar/Link/styles.d";

export const Container = styled.article`
    position: relative;
    padding: 0 16px 0 20px;
`;

export const Badge = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #4880ff;
`;

export const Text = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
`;

export const Link = styled(NextLink)<ILinkProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: transparent;

    & * {
        color: #202224;
    }

    ${({ $active }) =>
        $active === true &&
        css`
            background-color: #4880ff;

            & * {
                color: #ffffff;
                font-weight: 700;
            }
        `}
`;
