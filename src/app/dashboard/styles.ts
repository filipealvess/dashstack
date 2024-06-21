import styled, { css } from "styled-components";

import type { IContentProps } from "@/app/dashboard/styles.d";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #f5f6fa;
    overflow: hidden;
`;

export const Content = styled.div<IContentProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 100%;
    overflow: hidden;
    transition: 0.3s max-width;

    @media (min-width: 1000px) {
        ${({ $sidebarVisible }) =>
            $sidebarVisible === true &&
            css`
                max-width: calc(100% - 250px);
            `}
    }
`;
