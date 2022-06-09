import { LitElement, html } from "lit-element";
import { styles } from "./PopcornHeader.styles.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { LionButton, LionButtonReset, LionButtonSubmit } from "@lion/button";
import { Link } from "../app-link/Link.js";

export class PopcornHeader extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return styles;
  }

  static get scopedElements() {
    return {
      "lion-button": LionButtonSubmit,
      "app-link": Link,
    };
  }

  static get properties() {
    return {
      inputValue: { type: String },
    };
  }

  constructor() {
    super();
    this.inputValue = "";
  }

  render() {
    return html`
      <header>
        <nav>
          <h1><app-link href="/homepage">Popcorn juice</app-link></h1>
          <ul>
            <app-link href="/my-movies">My movies</app-link>
            <app-link href="/about">About</app-link>
          </ul>
          <div>
            <label for="search">
              <input
                @input=${(e) => {
                  this.inputValue = e.target.value;
                }}
                data-testid="input"
                placeholder="Spiderman"
                type="text"
              />
            </label>
            <lion-button @click=${this.onClickSearch} class="search"
              >Search</lion-button
            >
          </div>
        </nav>
      </header>
    `;
  }

  onClickSearch(ev) {
    ev.preventDefault();

    this.dispatchEvent(
      new CustomEvent("input-search", { detail: this.inputValue })
    );
  }
}