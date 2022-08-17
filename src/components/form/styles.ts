import styled, { StyledComponent } from "styled-components";

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
    justify-content: space-between;
    margin: 1.5rem 0;
    width: 100%;
`;

export const Title: StyledComponent<"span", any, {}, never> = styled.span`
    font-size: 1rem;
    color: rgba(69, 90, 100, 0.87);
    font-weight: 400;
`;
