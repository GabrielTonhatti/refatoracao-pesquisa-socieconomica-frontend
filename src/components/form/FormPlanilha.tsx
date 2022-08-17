import { FormEvent, FormEventHandler, ReactElement, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ButtonComponent from "../button/ButtonComponent";
import { ButtonDownload } from "../button/styles";
import Loading from "../loading/Loading";
import Snackbar from "../snackbar/Snackbar";
import Upload from "../upload/Upload";
import { Content, DivButton, Title } from "./styles";
import api from "../../config/server/api";
import { AxiosResponse } from "axios";

const FormPlanilha: Function = (): ReactElement => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [fileUploaded, setFileUploaded] = useState<File | null>(null);

    const navigate: NavigateFunction = useNavigate();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (
        event: FormEvent
    ): Promise<void> => {
        try {
            event.preventDefault();
            setError(null);
            setLoading(true);

            const form: FormData = new FormData();
            form.append("file", fileUploaded as File);
            const response: AxiosResponse = await api.post(
                "/gerar-relatorio",
                form
            );
            const dados: any = await response.data;

            sessionStorage.setItem("dados", JSON.stringify(dados));

            navigate("/graficos");
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
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
