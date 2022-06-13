import { css } from "lit-element";

export const styles = css`
  * {
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
    color: #343853;
  }

  .about {
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
  }

  .welcomeText {
    padding-top: 30px;
    padding-bottom: 10px;
  }

  .footerPopcornTitle {
    padding-top: 60px;
    font-size: 30px;
    font-family: "Bebas Neue", cursive;
  }

  @media (min-width: 768px) {
    p {
      width: 50vw;
    }

    .about {
      font-size: 20px;
    }
  }
`;