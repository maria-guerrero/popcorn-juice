import { expect, fixture, defineCE, elementUpdated } from "@open-wc/testing";
import { PopcornFooter } from "../PopcornFooter.js";

describe("PopcornFooter", () => {
  const scopedElements = { "popcorn-footer": PopcornFooter };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it("should be accessible", async () => {
    const element = await scopedFixture(
      html`<popcorn-footer></popcorn-footer>`
    );

    await expect(element).to.be.accessible();
  });
});
