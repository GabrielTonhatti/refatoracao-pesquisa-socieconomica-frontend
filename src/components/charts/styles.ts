import styled, { StyledComponent } from "styled-components";

export const ChartContainer: StyledComponent<
    "div",
    any,
    {},
    never
> = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 30px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    text-align: center;
    align-items: center;

    .chart {
        display: flex;
        width: 100%;
        height: 400px;
        align-items: center;
        justify-content: center;
    }
`;
