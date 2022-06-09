import { visualDiff } from "@web/test-runner-visual-regression";
import { PopcornListMovies } from "../PopcornListMovies.js";

if (!customElements.get("popcorn-list-movies")) {
  customElements.define("popcorn-list-movies", PopcornListMovies);
}

const movie = {
  Title: "Guardians of the Galaxy Vol. 2",
  Year: "2017",
  imdbID: "tt3896198",
  Type: "movie",
  Poster:
    "/.web-test-runner/assets/img/uniquePoster.jpg",
};

describe("PopcornHeader", () => {
  it("should show a movie", async () => {
    const element = document.createElement("popcorn-list-movies");
    element.movie = movie;
    document.body.appendChild(element);

    await visualDiff(element, "popcorn-list-movies");
  });
});
