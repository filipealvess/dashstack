import styled, { css } from "styled-components";

import type { IContainerProps } from "@/components/Sidebar/styles.d";

export const Container = styled.aside<IContainerProps>`
    width: 250px;
    background-color: #ffffff;
    overflow-x: hidden;
    transition: width, 0.3s;

    ${({ $visible }) =>
        $visible === false &&
        css`
            width: 0;
        `}
`;

export const Logo = styled.header`
    padding: 16px 24px;
    text-align: center;

    span {
        font-size: 1.8rem;
        font-weight: 700;
    }

    /* "Dash" word */
    span:nth-child(1) {
        color: #4880ff;
    }

    /* "Stack" word */
    span:nth-child(2) {
        color: #202224;
    }
`;

export const Links = styled.li`
    margin-top: 16px;
`;
