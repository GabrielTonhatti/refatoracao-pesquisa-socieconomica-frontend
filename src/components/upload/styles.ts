import styled, {
    css,
    FlattenSimpleInterpolation,
    StyledComponent,
} from "styled-components";

type PropsUploadMessage = {
    type?: string;
};

type PropsDropzone = {
    isDragActive: boolean;
    isDragReject: boolean;
};

const dragActive: FlattenSimpleInterpolation = css`
    border-color: #4caf50;
`;

const dragReject: FlattenSimpleInterpolation = css`
    border-color: #f44336;
`;

const messageColors = {
    default: "#000",
    error: "#f44336",
    success: "#4caf50",
};

export const UploadMessage: StyledComponent<
    "div",
    any,
    PropsUploadMessage,
    never
> = styled.div`
    display: flex;
    color: ${(props: PropsUploadMessage): string =>
        messageColors[(props.type as keyof typeof messageColors) || "default"]};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`;

export const DropContainer: StyledComponent<
    "div",
    any,
    {},
    never
> = styled.div.attrs({
    className: "dropzone",
})`
    border: 2px dashed #ddd;
    border-radius: 5px;
    cursor: pointer;
    padding: 32px;
    font-size: 1.5rem;
    transition: height 0.2s ease;
    margin-top: 1rem;

    ${(props: PropsDropzone): false | FlattenSimpleInterpolation =>
        props.isDragActive && dragActive};
    ${(props: PropsDropzone): false | FlattenSimpleInterpolation =>
        props.isDragReject && dragReject};
`;

export const AcceptedFiles: StyledComponent<"p", any, {}, never> = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #00713d;
    margin-top: -20px;
    justify-content: center;
    align-items: center;
    padding: 15px 0;

    .icon {
        font-size: 3rem;
        margin: 1rem;
        margin-top: 30px;
        margin-bottom: -30px;
    }

    @media (max-width: 600px) {
        font-size: 10px;

        .icon {
            font-size: 2rem;
            margin: 1rem;
            margin-top: 10px;
            margin-bottom: -10px;
        }
    }

    @media (max-width: 300px) {
        font-size: 6px;

        .icon {
            font-size: 1rem;
        }
    }
`;

export const Table: StyledComponent<"table", any, {}, never> = styled.table`
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
