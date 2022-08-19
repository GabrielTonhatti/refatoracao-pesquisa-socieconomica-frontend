import styled, { StyledComponent } from "styled-components";

export const ChartContainer: StyledComponent<
    "div",
    any,
    {},
    never
> = styled.div`
    width: 100%;
    margin: 30px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    text-align: center;
    align-items: center;

    .perguntas {
        z-index: 1000;
    }

    .chart {
        display: flex;
        width: 100%;
        height: 400px;
        align-items: center;
        justify-content: center;
    }

    .title {
        display: flex;
        text-align: center;
        justify-content: space-between;

        .container-filtro {
            display: grid;
            width: 200px;
            grid-template-columns: 1fr 1fr;
            justify-content: space-between;
            align-items: center;
            color: rgba(69, 90, 100, 0.87);
            align-items: flex-start;
            font-weight: 600;

            .filtro {
                text-align: center;
                padding: 2px;
                outline: none;
                border: 1px solid #ccc;
                background-color: #fff;
                color: rgba(69, 90, 100, 0.87);
                font-weight: 400;
                border-radius: 4px;
            }
        }
    }
`;

export const ButtonVoltar: StyledComponent<
    "button",
    any,
    {},
    never
> = styled.button`
    outline: none;
    padding: 12px;
    border: 1px solid #008ffb;
    border-radius: 4px;
    margin-bottom: -10px;
    background: #fff;
    font-weight: 600;
    color: #008ffb;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        background: #008ffb;
        color: #fff;
    }
`;

export const TitlePergunta: StyledComponent<"h1", any, {}, never> = styled.h1`
    font-size: 1.4rem;
    font-weight: 600;
    color: rgba(69, 90, 100, 0.87);
    margin-bottom: 20px;
`;
