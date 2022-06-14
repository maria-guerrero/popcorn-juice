import { visualDiff } from "@web/test-runner-visual-regression";
import { PopcornAbout } from "../PopcornAbout.js";

if(!customElements.get("popcorn-about")) {
    customElements.define("popcorn-about", PopcornAbout);
}

describe("PopcornAbout", () => {
    it("should show the about page", async () => {
        const element = document.createElement("popcorn-about");
        document.body.appendChild(element);

        await visualDiff(element, "popcorn-about");
    })
})