import { ReactElement } from "react";
import { DropEvent, useDropzone } from "react-dropzone";
import { IoMdCloudUpload } from "react-icons/io";
import Table from "../table/Table";
import { AcceptedFiles, DropContainer, UploadMessage } from "./styles";

type onDropAcceptedType =
    | (<T extends File>(files: T[], event: DropEvent) => void)
    | undefined;

type PropsUpload = {
    file: File | null;
    loading: boolean;
    setFile: (file: File | null) => void;
};

const Upload: Function = (props: PropsUpload): ReactElement => {
    const handleUpload: onDropAcceptedType = (files: Array<File>): void => {
        props.setFile(files[0]);
    };

    const { getRootProps, getInputProps, isDragActive, isDragReject } =
        useDropzone({
            accept: {
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                    [],
                    "application/wps-office.xlsx": [],
            },
            onDropAccepted: handleUpload,
        });

    const renderDragMessage: Function = (
        isDragActive: boolean,
        isDragReject: boolean
    ): ReactElement => {
        if (!isDragActive) {
            return (
                <UploadMessage>
                    Arraste e solte o arquivo aqui, ou clique para selecionar.
                </UploadMessage>
            );
        }

        if (isDragReject) {
            return (
                <UploadMessage type="error">
                    Arquivo não suportado
                </UploadMessage>
            );
        }

        return (
            <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>
        );
    };

    return (
        <>
            <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
            >
                {renderDragMessage(isDragActive, isDragReject)}
                <input {...getInputProps()} />
                <AcceptedFiles>
                    .xlsx
                    <IoMdCloudUpload className="icon" />
                </AcceptedFiles>
            </DropContainer>
            {props.file && (
                <Table
                    loading={props.loading}
                    file={props.file}
                    setFile={props.setFile}
                />
            )}
        </>
    );
};

export default Upload;
