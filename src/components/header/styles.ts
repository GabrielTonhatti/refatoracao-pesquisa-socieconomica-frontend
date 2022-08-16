import styled, { StyledComponent } from "styled-components";

export const HeaderStyle: StyledComponent<
    "header",
    any,
    {},
    never
> = styled.header`
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .img1 {
        width: 180px;
    }

    .img2 {
        width: 276px;
    }

    span {
        color: #000;
        font-size: 40px;
        text-transform: uppercase;
        font-weight: bold;
    }
`;
