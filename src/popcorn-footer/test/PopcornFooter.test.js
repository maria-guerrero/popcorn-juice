import { expect, fixture, defineCE } from "@open-wc/testing";
import { PopcornFooter } from "../PopcornFooter.js";

describe("PopcornFooter", () => {
  let element;
  const tag = defineCE(PopcornFooter);
  const getElementByTag = (element, tagName) => {
    return element.shadowRoot.querySelector(`[data-testid=${tagName}]`);
  }

  beforeEach(async () => {
    element = await fixture(`<${tag}></${tag}>}`);
  })

  xit("should be accessible", async () => {
    await expect(element).to.be.accessible();
  });
});
