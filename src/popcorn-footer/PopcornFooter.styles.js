import { css } from "lit-element";

export const styles = css`
  * {
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
  }

  footer {
    padding: 40px 20px 20px 20px;
    font-family: "Bebas Neue", cursive;
    color: #343853;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
  }

  @media (min-width: 1200px) {
      footer {
        font-size: 20px;
      }
    }
`;
