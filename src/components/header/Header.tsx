import React from "react";
import { HeaderStyle } from "./styles";
import { ReactElement } from "react";

const Header: Function = (): ReactElement => {
    return (
        <HeaderStyle>
            <img
                className="img1"
                src="logo-fatec-franca.png"
                alt="Logo Fatec"
            />
            <span>Perfil Socioeconômico</span>
            <img className="img2" src="logo-cps.png" alt="Logo Fatec" />
        </HeaderStyle>
    );
};

export default Header;
