import { css } from "@lion/core";

export const styles = css`
  * {
    padding: 0;
    margin: 0;
  }

  footer {
    padding: 15px;
    font-family: "Bebas Neue", cursive;
    color: #343853;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    background-color: #f7f7f7;
  }

  @media (min-width: 1200px) {
    footer {
      font-size: 20px;
    }
  }
`;
