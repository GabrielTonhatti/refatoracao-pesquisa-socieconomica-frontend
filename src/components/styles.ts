import styled, { StyledComponent } from "styled-components";

export const Container: StyledComponent<"div", any, {}, never> = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 100px auto;
`;

export const Content: StyledComponent<"div", any, {}, never> = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 30px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
`;

export const DivButton: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1.5rem 0;
    width: 100%;
`;

export const Title: StyledComponent<"span", any, {}, never> = styled.span`
    font-size: 1rem;
    color: #444;
`;

export const Button: StyledComponent<"button", any, {}, never> = styled.button`
    border: none;
    outline: none;
    padding: 12px;
    border-radius: 4px;
    margin-bottom: -10px;
    background: #4caf50;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
`;
