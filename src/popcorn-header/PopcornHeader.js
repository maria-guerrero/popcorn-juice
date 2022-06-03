import { LitElement, html } from "lit-element";
import { styles } from "./PopcornHeader.styles.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";

export class PopcornHeader extends ScopedElementsMixin(LitElement) {

  static get styles() {
    return styles;
  }

  render() {
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
}
