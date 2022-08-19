import styled, { StyledComponent } from "styled-components";

export const Content: StyledComponent<"div", any, {}, never> = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 30px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    @media (max-width: 400px) {
        text-align: center;
    }
`;

export const DivButton: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1.5rem 0;
    width: 100%;
    text-align: center;

    @media (max-width: 670px) {
        flex-direction: column;

        a {
            margin-bottom: 1rem;
        }
    }

    @media (max-width: 400px) {
        flex-direction: column;
        font-size: 10px;
    }

    @media (max-width: 320px) {
        font-size: 8px;

    }
`;

export const Title: StyledComponent<"span", any, {}, never> = styled.span`
    font-size: 1rem;
    color: rgba(69, 90, 100, 0.87);
    font-weight: 400;

    @media (max-width: 490px) {
        font-size: 14px;
    }

    @media (max-width: 435px) {
        font-size: 12px;
    }
`;
