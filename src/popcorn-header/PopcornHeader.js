import { LitElement, html } from "lit-element";
import { styles } from "./PopcornHeader.styles.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { router } from "lit-element-router";
import { Link } from "../app-link.js";

export class PopcornHeader extends router(ScopedElementsMixin(LitElement)) {
  static get styles() {
    return styles;
  }

  static get scopedElements() {
    return {
      "app-link": Link,
    };
  }

  static get routes() {
    return [
      {
        name: "myMovies",
        pattern: "",
        data: { title: "MyMovies" },
      },
      {
        name: "about",
        pattern: "about",
      },
      {
        name: "homepage",
        pattern: "homepage",
      },
    ];
  }

  static get properties() {
    return {
      // inputValue: { type: String },
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
    };
  }

  constructor() {
    super();
    // this.inputValue = "";
    this.route = "";
    this.params = {};
    this.query = {};
    this.data = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  render() {
    return html`
      <header>
        <nav>
          <h1>Popcorn juice</h1>
          <ul>
            <app-link href="/">Homepage</app-link>
            <app-link href="/myMovies">My movies</app-link>
            <app-link href="/about">About</app-link>

            <popcorn-main active-route=${this.route}>
              <li route="homepage">Homepage</li>
              <li route="myMovies">My movies ${this.query.data}</li>
              <li route="about">About ${this.params.id}</li>
            </popcorn-main>
          </ul>
          <div>
            <label for="search">
              <input
                @input=${(e) => (this.inputValue = e.target.value)}
                data-testid="input"
                placeholder="Spiderman"
                type="text"
              />
            </label>
            <lion-button class="search">Search</lion-button>
          </div>
        </nav>
      </header>
    `;
  }
}
