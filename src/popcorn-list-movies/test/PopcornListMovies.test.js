import { expect, fixture, defineCE } from "@open-wc/testing";
import { PopcornListMovies } from "../PopcornListMovies.js";

describe("PopcornHeader", () => {
  let element;
  const tag = defineCE(PopcornListMovies);
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