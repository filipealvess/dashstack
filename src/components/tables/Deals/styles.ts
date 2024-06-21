import styled from "styled-components";

export const Container = styled.section`
    overflow-x: auto;
`;

export const Content = styled.table`
    width: 100%;
    min-width: 750px;
    border-spacing: 0;

    thead tr {
        background-color: #f1f4f9;
    }

    th {
        font-weight: 700;
    }

    th:nth-child(1) {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    th:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    td,
    th {
        padding: 12px 24px;
        color: #202224;
        font-size: 1.4rem;
        text-align: left;
    }

    .flex {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .status {
        display: flex;
        justify-content: center;
        padding: 2px 4px;
        border-radius: 100px;
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 700;
    }

    .delivered {
        background-color: #00b69b;
    }

    .pending {
        background-color: #e8a710;
    }

    .rejected {
        background-color: #fd5454;
    }
`;
