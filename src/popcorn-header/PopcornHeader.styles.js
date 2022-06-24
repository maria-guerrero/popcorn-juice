import { css } from "@lion/core";

export const styles = css`
  * {
    padding: 0;
    margin: 0;
  }

  header {
    background-color: #c54b5c;
  }

  nav {
    padding: 25px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    font-family: "Bebas Neue", cursive;
  }

  h1 {
    font-size: 40px;
    text-align: center;
    color: #fc6471;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    background-color: white;
    border: none;
    border-radius: 5px;
    padding: 3px;
  }

  ::placeholder {
    padding: 5px;
    background-color: white;
    color: #0000007d;
    font-size: 13px;
  }

  .labelInput {
    color: #ffffffa4;
    padding-top: 20px;
  }

  .search {
    width: 35%;
    font-size: 13px;
    text-align: center;
    font-family: "Bebas Neue", cursive;
    color: white;
    background-color: #343853;
    border: none;
    border-radius: 4px;
    padding: 2px 20px 2px 20px;
    margin-top: 10px;
    /* margin-left: 5px; */
  }

  @media (min-width: 768px) {
    ::placeholder {
      font-size: 14px;
    }

    nav {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }

    .appLinkArticle {
      font-size: 25px;
    }

    form {
      flex-direction: row;
    }

    input {
      margin-top: 0;
      padding: 5px;
    }

    .labelInput {
      padding-top: 0px;
    }

    .search {
      padding: 5px 12px 5px 12px;
      margin-left: 10px;
      font-size: 15px;
    }

    @media (min-width: 1200px) {
      ::placeholder {
        font-size: 16px;
      }

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
