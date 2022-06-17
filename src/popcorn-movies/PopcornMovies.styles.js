import { css } from "@lion/core";

export const styles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #f7f7f7;
  }

  .noMoviesMessage {
    padding-top: 17px;
    font-family: 'Bangers', cursive;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #343853;
  }

  img {
    width: 150px;
    height: 200px;
    object-fit: cover;
    display: flex;
    border-radius: 15px;
    padding: 10px;
  }

  img:hover {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: transform ease 0.1s;
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
  .movieElement:hover {
    
  }

  .movieTitle {
    font-family: "Bebas Neue", cursive;
    color: #343853;
    text-align: center;
    width: 40vw;
    justify-content: center;
    display: flex;
  }

  .removeMovie {
    font-size: 14px;
    text-align: center;
    font-family: "Bebas Neue", cursive;
    color: white;
    background-color: #6c8fab;
    border: none;
    border-radius: 4px;
    padding: 8px 25px 8px 25px;
    margin-top: 7px;
  }

  .removeMovie:hover {
    background-color: #385368;
    transform: scale(1.05);
    transition: transform ease 0.1s;
    }

  @media (min-width: 768px) {
    img {
      width: 170px;
      height: 220px;
      padding: 10px;
    }

    .movieTitle {
      width: 20vw;
    }

    .movieElement {
      padding: 10px;
    }

    @media (min-width: 1200px) {
    img {
      width: 280px;
      height: 350px;
    }

    .movieTitle {
      width: 20vw;
      font-size: 20px;
    }

    .movieElement {
      padding: 10px;
    }

    .removeMovie {
      font-size: 17px;
    }
  }
`;
