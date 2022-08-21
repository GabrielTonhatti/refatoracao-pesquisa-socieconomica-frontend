import styled, {
    css,
    FlattenSimpleInterpolation,
    StyledComponent,
} from "styled-components";

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

    @media (max-width: 425px) {
        thead,
        tbody {
            font-size: 10px;
        }

        tbody {
            td {
                button {
                    .trash {
                        font-size: 12px;
                    }
                }
            }
        }
    }

    @media (max-width: 375px) {
        thead,
        tbody {
            font-size: 8px;
        }

        tbody {
            td {
                button {
                    .trash {
                        font-size: 10px;
                    }
                }
            }
        }
    }
`;

const buttonDisabled: FlattenSimpleInterpolation = css`
    color: #ddd;
    transition: 0.2s ease-in-out;
    cursor: default;
`;

type PropsButton = {
    disabled?: boolean;
};

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

    ${(props: PropsButton): false | FlattenSimpleInterpolation | undefined =>
        props.disabled && buttonDisabled}
`;
