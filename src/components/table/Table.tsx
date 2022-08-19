import fileSize from "filesize";
import React, { ReactElement, MouseEventHandler } from "react";
import { FaTrash } from "react-icons/fa";
import { ButtonTrash, TableStyle } from "./styles";

type TableProps = {
    file: File;
    loading: boolean;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
};

const Table: Function = (props: TableProps): ReactElement => {
    const handleclick: MouseEventHandler<HTMLButtonElement> = (): void => {
        props.setFile(null);
    };

    return (
        <TableStyle>
            <thead>
                <tr>
                    <th>Arquivo</th>
                    <th>Tamanho</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                <tr key={props.file.name}>
                    <td>{props.file.name}</td>
                    <td>{fileSize(props.file.size)}</td>
                    <td>
                        <ButtonTrash
                            title="Remover Arquivo"
                            onClick={handleclick}
                            disabled={props.loading}
                        >
                            <FaTrash />
                        </ButtonTrash>
                    </td>
                </tr>
            </tbody>
        </TableStyle>
    );
};

export default Table;
