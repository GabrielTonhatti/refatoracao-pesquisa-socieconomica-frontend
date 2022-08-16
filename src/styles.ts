import styled, { StyledComponent } from "styled-components";

export const Container: StyledComponent<"div", any, {}, never> = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 50px auto;
`;
