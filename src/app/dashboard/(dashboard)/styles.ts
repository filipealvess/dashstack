import styled from "styled-components";
import {
    Container as SummaryCard,
    Footer as SummaryCardFooter,
} from "@/components/cards/Summary/styles";

export const Container = styled.main`
    padding: 24px;
    overflow-y: auto;
`;

export const Header = styled.header`
    margin-bottom: 24px;

    h1 {
        font-size: 2.4rem;
        font-weight: 700;
    }
`;

export const Summary = styled.section`
    display: flex;
    gap: 16px;

    ${SummaryCard} {
        flex: 1;

        @media (max-width: 800px) {
            flex: none;
            width: calc(50% - 8px);
        }

        @media (max-width: 450px) {
            width: 100%;
        }
    }

    ${SummaryCardFooter} {
        @media (max-width: 900px) and (min-width: 800px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
        }
    }

    @media (max-width: 800px) {
        flex-wrap: wrap;
    }
`;
