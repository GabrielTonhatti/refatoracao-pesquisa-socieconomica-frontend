import { FormEvent, FormEventHandler, ReactElement, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import Upload from "../upload/Upload";
import { Button, ButtonDownload, Content, DivButton, Title } from "./styles";
import Snackbar from "../snackbar/Snackbar";

const FormPlanilha: Function = (): ReactElement => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
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
                    <Upload />
                    <DivButton>
                        <ButtonDownload href="Dados.xlsx" download="Dados">
                            Download planilha modelo
                        </ButtonDownload>
                        {loading ? (
                            <Loading />
                        ) : (
                            <Button>Gerar Gráficos</Button>
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
