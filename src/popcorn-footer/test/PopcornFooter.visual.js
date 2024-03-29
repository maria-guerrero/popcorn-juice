import { visualDiff } from "@web/test-runner-visual-regression";
import { PopcornFooter } from "../PopcornFooter.js";

if(!customElements.get("popcorn-footer")) {
    customElements.define("popcorn-footer", PopcornFooter);
}

describe("PopcornFooter", () => {
    it("should show the footer", async () => {
        const element = document.createElement("popcorn-footer");
        document.body.appendChild(element);

        await visualDiff(element, "popcorn-footer");
    })
})