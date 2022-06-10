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

  ul {
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
`;
