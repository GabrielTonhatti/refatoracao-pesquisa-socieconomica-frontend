import { ReactElement } from "react";
import "./App.css";
import FormPlanilha from "./components/form/FormPlanilha";
import { Container } from "./styles";

function App(): ReactElement {
    return (
        <Container>
            <FormPlanilha />
        </Container>
    );
}

export default App;
