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
    default: "rgba(69, 90, 100, 0.87)",
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
    font-weight: 500;
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
    text-align: center;

    ${(props: PropsDropzone): false | FlattenSimpleInterpolation =>
        props.isDragActive && dragActive};
    ${(props: PropsDropzone): false | FlattenSimpleInterpolation =>
        props.isDragReject && dragReject};

    @media (max-width: 804px) {
        font-size: 1.2rem;
    }

    @media (max-width: 682px) {
        font-size: 1rem;
    }

    @media (max-width: 606px) {
        font-size: 14px;
    }

    @media (max-width: 556px) {
        font-size: 12px;
    }

   
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
