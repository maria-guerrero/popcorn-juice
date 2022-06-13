import { expect, fixture, defineCE, elementUpdated } from "@open-wc/testing";
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

  it("should get the value correctly when the user search a movie", async () => {
    element.inputValue = "Guardians of the galaxy";
    await elementUpdated(element);

    const searchButton = element.shadowRoot.querySelector('[data-testid="input"]');
    searchButton.click();

    expect(element.inputValue).to.be.equal("Guardians of the galaxy");
  })
});