import React from "react";
import { HeaderStyle } from "./styles";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Header: Function = (): ReactElement => {
    return (
        <Link to="/" style={{ textDecoration: "none", outline: "none" }}>
            <HeaderStyle>
                <img
                    className="img1"
                    src="logo-fatec-franca.png"
                    alt="Logo Fatec"
                />
                <span>Perfil Socioeconômico</span>
                <img className="img2" src="logo-cps.png" alt="Logo Fatec" />
            </HeaderStyle>
        </Link>
    );
};

export default Header;
