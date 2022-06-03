import { LitElement, html } from "lit-element";
import { styles } from "./PopcornMain.styles.js";

export class PopcornMain extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      movies: { type: Array },
    };
  }

  render() {
    return html`
      <main>
        <section>
          <popcorn-movies .movies=${this.movies}
            >${this.connectedCallback()}</popcorn-movies
          >
        </section>
      </main>
    `;
  }
}
