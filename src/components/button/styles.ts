import styled, { StyledComponent } from "styled-components";

type ColorProps = {
    color?: string;
    background?: string;
    hasBorder?: boolean;
};

export const Button: StyledComponent<
    "button",
    any,
    ColorProps,
    never
> = styled.button`
    outline: none;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin-bottom: -10px;
    background: #4caf50;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
`;

export const ButtonDownload: StyledComponent<"a", any, {}, never> = styled.a`
    outline: none;
    padding: 12px;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    margin-bottom: -10px;
    text-decoration: none;
    background: #fff;
    border-color: #4caf50;
    font-weight: 600;
    color: #4caf50;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background: #4caf50;
        color: #fff;
        transition: 0.2s ease-in-out;
    }
`;
