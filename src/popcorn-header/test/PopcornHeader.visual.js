import { visualDiff } from "@web/test-runner-visual-regression";
import { PopcornHeader } from "../PopcornHeader.js";

if(!customElements.get("popcorn-header")) {
    customElements.define("popcorn-header", PopcornHeader);
}

describe("PopcornHeader", () => {
    it("can diff an element", async () => {
        const element = document.createElement("popcorn-header");
        document.body.appendChild(element);

        await visualDiff(element, "popcorn-header");
    })
})