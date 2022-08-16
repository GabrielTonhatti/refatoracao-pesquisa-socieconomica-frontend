import { ReactElement } from "react";
import "./App.css";
import Header from "./components/header/Header";
import {
    Button,
    Container,
    Content,
    DivButton,
    Title,
} from "./components/styles";
import Upload from "./components/upload/Upload";

function App(): ReactElement {
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
                            <Button>Gerar Gráficos</Button>
                        </DivButton>
                    </form>
                </Content>
            </Container>
        </>
    );
}

export default App;
