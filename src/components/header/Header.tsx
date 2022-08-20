import React from "react";
import { HeaderStyle } from "./styles";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Header: Function = (): ReactElement => {
    return (
        <HeaderStyle>
            <Link to="/" style={{ textDecoration: "none", outline: "none" }}>
                <img
                    className="img1"
                    src="logo-fatec-franca.png"
                    alt="Logo Fatec"
                />
            </Link>
            <span>Perfil Socioeconômico</span>
            <img className="img2" src="logo-cps.png" alt="Logo Fatec" />
        </HeaderStyle>
    );
};

export default Header;
