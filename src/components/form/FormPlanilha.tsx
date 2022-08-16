import { FormEvent, FormEventHandler, ReactElement, useState } from "react";
import Loading from "../loading/Loading";
import Upload from "../upload/Upload";
import { Button, ButtonDownload, Content, DivButton, Title } from "./styles";

const FormPlanilha: Function = (): ReactElement => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (
        event: FormEvent
    ): Promise<void> => {
        event.preventDefault();
        setLoading(true);

        setInterval(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <Content>
            <form onSubmit={handleSubmit}>
                <Title>Importação da planilha de geração dos gráficos</Title>
                <Upload />
                <DivButton>
                    <ButtonDownload href="Dados.xlsx" download="Dados">
                        Download planilha modelo
                    </ButtonDownload>
                    {loading ? <Loading /> : <Button>Gerar Gráficos</Button>}
                </DivButton>
            </form>
        </Content>
    );
};

export default FormPlanilha;
