import { ReactElement } from "react";
import { DivLoading } from "../loading/styles";
import { Button } from "./styles";

type PropsButton = {
    children: ReactElement;
    file: File | null;
};

const ButtonComponent: Function = (props: PropsButton): ReactElement => {
    return props.file ? (
        <Button>{props.children}</Button>
    ) : (
        <DivLoading>{props.children}</DivLoading>
    );
};

export default ButtonComponent;
