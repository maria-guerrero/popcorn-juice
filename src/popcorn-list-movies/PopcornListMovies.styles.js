import { css } from "lit-element";

export const styles = css`
  * {
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
    box-sizing: border-box;
  }

  img {
    width: 150px;
    height: 200px;
    object-fit: cover;
    display: flex;
    border-radius: 15px;
    padding: 10px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .movieElement {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .movieTitle {
    font-family: "Bebas Neue", cursive;
    color: #7D5BA6;
    text-align: center;
    width: 40vw;
    justify-content: center;
    display: flex;
  }
`;
