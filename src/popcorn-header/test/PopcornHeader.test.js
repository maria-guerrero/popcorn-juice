import { expect, fixture, defineCE } from "@open-wc/testing";
import { PopcornHeader } from "../PopcornHeader.js";

describe("PopcornHeader", () => {
  let element;
  const tag = defineCE(PopcornHeader);
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