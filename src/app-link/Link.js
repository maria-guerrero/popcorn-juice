import { LitElement, html, css } from "lit-element";
import { navigator } from "lit-element-router";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { styles } from "./Link.styles.js"

export class Link extends navigator(ScopedElementsMixin(LitElement)) {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      href: { type: String },
    };
  }

  constructor() {
    super();
    this.href = "";
  }

  onClickLink(event) {
    event.preventDefault();
    this.navigate(this.href);
  }

  render() {
    return html`
      <a href=${this.href} @click=${this.onClickLink}>
        <slot></slot>
      </a>
    `;
  }
}