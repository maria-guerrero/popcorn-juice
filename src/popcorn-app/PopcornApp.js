import { LitElement, html } from "../../node_modules/lit-element/index.js";
import { styles } from "./PopcornApp.styles.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { callToApi } from "../services/api.js";

callToApi ()

export class PopcornApp extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return styles;
  }

  renderHeader() {
    return html`
      <header>
        <nav class="nav">
          <h1 class="title">Popcorn juice</h1>
          <ul class="listNav">
            <li class="elementList">Homepage</li>
            <li class="elementList">My movies</li>
            <li class="elementList">About</li>
          </ul>
          <div>
            <label for="search">
              <input placeholder="Spiderman" class="input" type="text" />
            </label>
            <lion-button class="search">Search</lion-button>
          </div>
        </nav>
      </header>
    `;
  }

  renderMain() {
    return html`
      <main>
        <section>
          <ul>
            <li>
              <!-- <p>hello web</p> -->
            </li>
          </ul>
        </section>
      </main>
    `;
  }

  renderFooter() {
      const author = "María";
      return html `
        <footer class="footer">
            <p>Made with 🖤 by &copy;${author}</p>
        </footer>
      `;
  }

  render() {
    return html` ${this.renderHeader()} ${this.renderMain()} ${this.renderFooter()}; `;
  }
}
