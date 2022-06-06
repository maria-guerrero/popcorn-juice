import { LitElement, html } from "lit-element";
import { styles } from "./PopcornHeader.styles.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { LionButton, LionButtonReset, LionButtonSubmit } from "@lion/button";

export class PopcornHeader extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return styles;
  }

  static get scopedElements() {
    return {
      "lion-button": LionButtonSubmit,
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
          <h1>Popcorn juice</h1>
          <ul>
            <li><a href="/">Homepage</a></li>
            <li><a href="/my-movies">My movies</a></li>
            <li><a href="/about">About</a></li>
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