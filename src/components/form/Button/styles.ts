import styled, { css } from "styled-components";

import type { IProps } from "@/components/form/Button/styles.d";

export const Container = styled.button<IProps>`
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #4880ff;
    color: #ffffff;
    font-weight: 600;
    transition: 0.3s opacity;

    &:disabled {
        opacity: 0.75;
        cursor: not-allowed;
    }

    &:active {
        opacity: 0.75;
    }

    ${({ $type }) =>
        $type === "secondary" &&
        css`
            border: 2px solid #4880ff;
            background-color: transparent;
            color: #4880ff;
        `}
`;
