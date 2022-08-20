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

    @media (max-width: 1440px) {
        span {
            font-size: 34px;
        }
    }

    @media (max-width: 1024px) {
        .img1 {
            width: 140px;
        }

        .img2 {
            width: 246px;
        }

        span {
            font-size: 28px;
        }
    }

    @media (max-width: 798px) {
        .img1 {
            width: 110px;
        }

        .img2 {
            width: 216px;
        }

        span {
            font-size: 24px;
        }
    }

    @media (max-width: 684px) {
        .img1 {
            width: 90px;
        }

        .img2 {
            width: 186px;
        }

        span {
            font-size: 18px;
        }
    }

    @media (max-width: 554px) {
        .img1 {
            width: 90px;
        }

        .img2 {
            width: 136px;
        }

        span {
            font-size: 1rem;
        }
    }

    @media (max-width: 474px) {
        .img1 {
            width: 60px;
        }

        .img2 {
            width: 116px;
        }

        span {
            font-size: 14px;
        }
    }

    @media (max-width: 375px) {
        .img1 {
            width: 50px;
        }

        .img2 {
            width: 106px;
        }

        span {
            font-size: 12px;
        }
    }

    @media (max-width: 320px) {
        .img1 {
            width: 30px;
        }

        .img2 {
            width: 66px;
        }

        span {
            font-size: 12px;
        }
    }
`;
