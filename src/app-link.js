import { LitElement, html } from "lit-element";
import { navigator } from "lit-element-router";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";

export class Link extends navigator(ScopedElementsMixin(LitElement)) {
  static get properties() {
    return {
      href: { type: String },
    };
  }

  constructor() {
    super();
    this.href = "";
  }

  render() {
    return html` <a href="${this.href}" @click=${this.linkClick}></a> `;
  }

  linkClick(ev) {
    ev.preventDefault();
    this.navigate(this.href);
  }
}
