import { LitElement, html } from "lit-element";
import { styles } from "./PopcornMovies.styles.js";

export class PopcornMovie extends LitElement {

    static get styles() {
        return styles;
    }

    static get properties() {
        return {
            movies: { type: Array },
        };
    }

    render() {
        return html `
            <ul>
                ${this.movies.map(
                    (movie) => html `
                        <li>
                            <p>${movie.title}</p>
                        </li>
                 `
                )}
            </ul>
        `;
    }
}