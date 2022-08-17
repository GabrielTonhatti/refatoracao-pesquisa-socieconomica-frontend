import { FormEvent, FormEventHandler, ReactElement, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ButtonComponent from "../button/ButtonComponent";
import { ButtonDownload } from "../button/styles";
import Loading from "../loading/Loading";
import Snackbar from "../snackbar/Snackbar";
import Upload from "../upload/Upload";
import { Content, DivButton, Title } from "./styles";

const FormPlanilha: Function = (): ReactElement => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [fileUploaded, setFileUploaded] = useState<File | null>(null);

    const navigate: NavigateFunction = useNavigate();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (
        event: FormEvent
    ): Promise<void> => {
        event.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            // setError("Teste");
            navigate("/graficos");
        }, 3000);
    };

    return (
        <>
            <Content>
                <form onSubmit={handleSubmit}>
                    <Title>
                        Importação da planilha de geração dos gráficos
                    </Title>
                    <Upload file={fileUploaded} setFile={setFileUploaded} />
                    <DivButton>
                        <ButtonDownload href="Dados.xlsx" download="Dados">
                            Download planilha modelo
                        </ButtonDownload>
                        {loading ? (
                            <Loading />
                        ) : (
                            <ButtonComponent file={fileUploaded}>
                                Gerar Gráficos
                            </ButtonComponent>
                        )}
                    </DivButton>
                </form>
            </Content>

            {error && (
                <Snackbar
                    type="error"
                    open={true}
                    onClose={(): void => setError(null)}
                >
                    {error}
                </Snackbar>
            )}
        </>
    );
};

export default FormPlanilha;
