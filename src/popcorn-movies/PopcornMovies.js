import { LitElement, html } from "lit-element";

import { styles } from "./PopcornMovies.styles.js";

export class PopcornMovies extends LitElement {

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      myMovies: { type: Array },
    };
  }

  constructor() {
    super();
    this.myMovies = [
      {
        "Title": "Batman Begins",
        "Year": "2005",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        "Title": "Batman v Superman: Dawn of Justice",
        "Year": "2016",
        "imdbID": "tt2975590",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
    ];
  }

  render() {
    return html`
      <ul>
      ${this.myMovies.map(
          (movie) => html`
            <li data-testid="movieElement" class="movieElement" key=${movie.imdbID}>
            <label>
            <input type="checkbox" />
            </label>
              <img src=${movie.Poster} />
              <p class="movieTitle">${movie.Title}</p>
            </li>
          `
        )}
      </ul>
    `;
  }
}
