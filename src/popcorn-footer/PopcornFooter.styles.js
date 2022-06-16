import { css } from "lit-element";

export const styles = css`
  * {
    padding: 0;
    margin: 0;
  }

  footer {
    padding: 20px;
    font-family: "Bebas Neue", cursive;
    color: #343853;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
  }

  @media (min-width: 1200px) {
      footer {
        font-size: 20px;
      }
    }
`;
