import styled, { css } from "styled-components";

import type { IProps } from "@/components/styled/Spacer/index.d";

export const Spacer = styled.div<IProps>`
    ${({ $height }) =>
        $height !== undefined &&
        css`
            height: ${$height}px;
        `}

    ${({ $expand }) =>
        $expand === true &&
        css`
            flex: 1;
        `}
`;
