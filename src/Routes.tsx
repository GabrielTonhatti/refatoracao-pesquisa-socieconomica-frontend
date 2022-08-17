import ChartList from "./components/charts/ChartList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/header/Header";
import { ReactElement } from "react";

const RoutesConfig: Function = (): ReactElement => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/graficos" element={<ChartList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesConfig;
