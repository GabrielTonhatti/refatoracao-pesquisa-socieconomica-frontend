import React, { MouseEventHandler } from "react";
import { SnackbarContent } from "./styles";
import { ReactElement } from "react";

type PropsSnackbar = {
    type: "success" | "error" | "warning" | "info" | "default";
    open: boolean;
    children: React.ReactNode;
    onClose: MouseEventHandler<HTMLButtonElement>;
};

const Snackbar: Function = ({
    type,
    open,
    children,
    onClose,
}: PropsSnackbar): ReactElement => {
    return (
        <SnackbarContent open={open} type={type}>
            <span>{children}</span>
            <button className="close" onClick={onClose}>
                &times;
            </button>
        </SnackbarContent>
    );
};

export default Snackbar;
