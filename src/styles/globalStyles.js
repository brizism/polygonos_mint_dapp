import styled from "styled-components";
import breakpoint from './breakpoints';

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and ${breakpoint.device.minsm} and ${breakpoint.device.maxlg}{
    flex-direction: row;
    align-items: center;
  }
  @media only screen and ${breakpoint.device.minlg}{
    flex-direction: row;
  }
`;

export const Information = styled.div`
  background: ${({ bg }) => (bg ? bg : "black")};
  display: flex;
  flex-direction: row;

  @media only screen and ${breakpoint.device.maxsm}{
    flex-direction: column;
  }

  .left,
  .right {
    width: 100%;
    font-size: 1.25rem;
    line-height: 1.5;
    color: ${({ color }) => (color ? color : "var(--secondary-text)")};
  }

  .left {
    padding: 8% 4% 4% 8%;

    h1 {
      font-size: 10rem;
      font-weight: bold;

      @media only screen and ${breakpoint.device.maxsm}{
        font-size: 5rem;
      }
    }
  }

  .right {
    padding: 8% 8% 4% 4%;

    h1 {
      font-size: 2.5rem;
      font-weight: bold;

      @media only screen and ${breakpoint.device.maxsm}{
        font-size: 1.5rem;
      }
    }

    .faq-q {
      margin-bottom: 2rem;

      .bullet {
        padding-left: 2rem;
        margin: 1rem 0;
      }
    }
  }

  @media only screen and ${breakpoint.device.maxsm}{
    .right {
      padding: 8% 8% 8% 8%;
    }

    .left {
      padding: 8% 8% 0 8%;
    }
  }
`;

export const ImagesBanner = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    width: 20%;

    @media only screen and ${breakpoint.device.minsm}{
      width: 10%;
    }

    img {
      width: 100%;
    }
  }
`

export const TextBanner = styled.div`
  background: black;
  width: 100%;
  height: 170px;
  color: var(--secondary-text);
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.25;

  a:hover {
    color: var(--primary);
  }

  @media only screen and ${breakpoint.device.minxs} and ${breakpoint.device.maxsm}{
    p {
      padding: 0 1rem;
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  padding: 8% 8% 8% 8%;
  @media only screen and ${breakpoint.device.minlg}{
    width: 50%;
    padding: 4% 4% 4% 4%;
  }
`;

export const Top = styled.div`
  @media only screen and ${breakpoint.device.minxs} and ${breakpoint.device.maxsm}{
    max-width: 300px;
  }
  @media only screen and ${breakpoint.device.minsm} and ${breakpoint.device.maxlg}{
    max-width: 400px;
  }
  @media only screen and ${breakpoint.device.minlg} and ${breakpoint.device.maxxl}{
    max-width: 1020px;
  }
  @media only screen and ${breakpoint.device.minxl}{
    width: 790px;
  }
`;

export const Bottom = styled.div`
  margin: 3rem 0;

  .counter {
    font-size:  3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const Right = styled.div`
  height: 400px;
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and ${breakpoint.device.minsm}{
    background-position: inherit;
  }
  @media only screen and ${breakpoint.device.minlg}{
    background-size: cover;
    width: 50%;
    height: auto;
  }
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 1rem;
  margin-bottom: .5rem;
  @media only screen and ${breakpoint.device.minsm}{
    font-size: 1.25rem;
  }
`;

