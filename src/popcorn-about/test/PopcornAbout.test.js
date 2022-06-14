import { expect, fixture, defineCE } from "@open-wc/testing";
import { PopcornAbout } from "../PopcornAbout.js";

describe("PopcornAbout", () => {
  let element;
  const tag = defineCE(PopcornAbout);
  const getElementByTag = (element, tagName) => {
    return element.shadowRoot.querySelector(`[data-testid=${tagName}]`);
  }

  beforeEach(async () => {
    element = await fixture(`<${tag}></${tag}>}`);
  })

  it("should be accessible", async () => {
    await expect(element).to.be.accessible();
  });
});