import styled, { StyledComponent } from "styled-components";

export const TableStyle: StyledComponent<
    "table",
    any,
    {},
    never
> = styled.table`
    width: 100%;
    color: rgba(69, 90, 100, 0.87);

    thead,
    tbody {
        display: table-row-group;
        border-color: inherit;
        font-size: 12px;

        tr {
            display: table-row;
            height: 48px;
            outline: none;
            vertical-align: middle;
        }
    }

    thead {
        tr {
            th {
                padding: 0.5rem;
                font-weight: 600;
                display: table-cell;
                text-align: left;
                border-bottom: 1px solid #ddd;
            }
        }
    }

    tbody {
        tr {
            td {
                padding: 0.5rem;
                font-weight: 400;
                display: table-cell;
                text-align: left;
                border-bottom: 1px solid #ddd;
            }
        }
    }
`;

export const ButtonTrash: StyledComponent<
    "button",
    any,
    {},
    never
> = styled.button`
    font-size: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    color: #444;
`;
