import { ReactElement, useState } from "react";
import { DropEvent, useDropzone } from "react-dropzone";
import { IoMdCloudUpload } from "react-icons/io";
import Table from "../table/Table";
import { AcceptedFiles, DropContainer, UploadMessage } from "./styles";

type onDropAcceptedType =
    | (<T extends File>(files: T[], event: DropEvent) => void)
    | undefined;

const Upload: Function = (): ReactElement => {
    const [fileUploaded, setFileUploaded] = useState<File | null>(null);

    const handleUpload: onDropAcceptedType = (files: Array<File>): void => {
        setFileUploaded(files[0]);
    };

    const { getRootProps, getInputProps, isDragActive, isDragReject } =
        useDropzone({
            accept: {
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                    [],
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
            {fileUploaded && (
                <Table file={fileUploaded} setFile={setFileUploaded} />
            )}
        </>
    );
};

export default Upload;
