import { CircularProgress } from "@material-ui/core";
import { ReactElement } from "react";
import { DivLoading } from "./styles";

const Loading: Function = (): ReactElement => {
    return (
        <DivLoading>
            <span>Processando</span>
            <CircularProgress
                color="primary"
                size={20}
                className="teste"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: -10,
                    marginLeft: -10,
                }}
            />
        </DivLoading>
    );
};

export default Loading;
