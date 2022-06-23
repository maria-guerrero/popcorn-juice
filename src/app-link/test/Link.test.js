import { expect, fixture, html } from "@open-wc/testing";
import { Link } from "../Link.js";

const scopedElements = { "app-link": Link };
const scopedFixture = (template) => fixture(template, { scopedElements });

describe("Link", () => {
  it("should be accessible", async () => {
    const element = await scopedFixture(html`<app-link></app-link>`);
    await expect(element).to.be.accessible();
  });

  it("should show a valid href when the user press the link", async () => {
    const element = await scopedFixture(html`<app-link .href=${'/my-movies'}></app-link>`);

    const link = element.shadowRoot.querySelector(".linkApp");

    expect(link.href.includes('/my-movies')).to.be.true;
  });
});
