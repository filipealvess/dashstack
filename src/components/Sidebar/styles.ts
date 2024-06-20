import styled, { css } from "styled-components";

import type {
    IContainerProps,
    IOverlayProps,
} from "@/components/Sidebar/styles.d";

export const Container = styled.aside<IContainerProps>`
    width: 250px;
    max-width: 80%;
    border-right: 0.5px solid #e0e0e0;
    background-color: #ffffff;
    overflow-x: hidden;
    transition: width, 0.3s;

    ${({ $visible }) =>
        $visible === false &&
        css`
            width: 0;
        `}

    @media (max-width: 800px) {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 10;
    }
`;

export const Overlay = styled.div<IOverlayProps>`
    background-color: transparent;
    transition: 0.3s background-color;

    @media (max-width: 800px) {
        ${({ $visible }) =>
            $visible === true &&
            css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.25);
                z-index: 9;
            `}
    }
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
