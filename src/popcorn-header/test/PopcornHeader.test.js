import { expect, fixture, html } from "@open-wc/testing";
import { PopcornHeader } from "../PopcornHeader.js";

describe("PopcornHeader", () => {
  const scopedElements = { "popcorn-header": PopcornHeader };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it("should be accessible", async () => {
    const element = await scopedFixture(
      html`<popcorn-header></popcorn-header>`
    );

    await expect(element).to.be.accessible();
  });
});
