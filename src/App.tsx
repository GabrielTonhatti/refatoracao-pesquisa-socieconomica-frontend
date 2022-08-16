import { ReactElement, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import Upload from "./components/upload/Upload";
import { Button, Container, Content, DivButton, Title } from "./styles";

function App(): ReactElement {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <form>
                        <Title>
                            Importação da planilha de geração dos gráficos
                        </Title>
                        <Upload />
                        <DivButton>
                            {loading ? (
                                <Loading />
                            ) : (
                                <Button>Gerar Gráficos</Button>
                            )}
                        </DivButton>
                    </form>
                </Content>
            </Container>
        </>
    );
}

export default App;
