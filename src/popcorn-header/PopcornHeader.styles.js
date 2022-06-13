import { css } from "lit-element";

export const styles = css`
  * {
    padding: 0;
    margin: 0;
  }

  header {
    background: linear-gradient(to bottom, #ff7903 0%, #f7f7f7 100%);
  }

  nav {
    padding: 25px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    font-family: "Bebas Neue", cursive;
    border-bottom: 3px solid #34385322;
  }

  h1 {
    font-size: 40px;
    text-align: center;
    color: #fc6471;
  }

  .appLinkArticle {
    display: flex;
    list-style-type: none;
    font-size: 20px;
  }

  .link {
    padding-right: 10px;
    padding-left: 10px;
  }

  input {
    border: 3px solid #ff7903;
    padding: 3px;
    border-radius: 6px;
    margin-top: 10px;
  }

  .search {
    font-size: 13px;
    text-align: center;
    font-family: "Bebas Neue", cursive;
    color: white;
    background-color: #343853;
    border: none;
    border-radius: 4px;
    padding: 2px 15px 2px 15px;
    margin-left: 5px;
  }

  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }

    input {
      margin-top: 0;
      padding: 5px;
    }

    .search {
      padding: 5px 12px 5px 12px;
      margin-left: 10px;
    }

    @media (min-width: 1200px) {
      h1 {
        font-size: 60px;
        margin-left: 15px;
      }

      .link {
        font-size: 35px;
      }

      input {
        margin-top: 0;
        padding: 10px;
        width: 25vw;
      }

      .search {
        padding: 10px 17px 10px 17px;
        font-size: 20px;
      }
    }
  }
`;
