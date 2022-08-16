import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import RoutesConfig from "./Routes";

const root: Root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RoutesConfig />
    </React.StrictMode>
);
