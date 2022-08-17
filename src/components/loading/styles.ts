import styled, { StyledComponent } from "styled-components";

export const DivLoading: StyledComponent<"div", any, {}, never> = styled.div`
    display: inline-block;
    position: relative;
    padding: 12px;
    border-radius: 4px;
    margin-bottom: -10px;
    background: #f3f6f7;
    font-weight: 600;
    color: rgba(69, 90, 100, 0.26);
    text-transform: uppercase;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
`;
