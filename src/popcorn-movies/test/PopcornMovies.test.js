import { expect, fixture, html, waitUntil } from "@open-wc/testing";
import { PopcornMovies } from "../PopcornMovies.js";

const movies = [
  {
    "title": "Batman Begins",
    "id": "tt0372784",
    "poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
    "title": "Batman v Superman: Dawn of Justice",
    "id": "tt2975590",
    "poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
]

describe("PopcornMovies", () => {
  const scopedElements = { "popcorn-movies": PopcornMovies };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  // const getElementByTag = (element, tagName) =>
  //   element.shadowRoot.querySelector(`[data-testid="${tagName}"]`);

  it("should be accessible", async () => {
    const element = await scopedFixture(
      html `<popcorn-movies .movies=${movies}></popcorn-movies>`
    );
    await expect(element).to.be.accessible();
  });

  it("should remove a movie when the user click on 'remove' button", async () => {
    const element = await scopedFixture(
      html `<popcorn-movies .movies=${movies}></popcorn-movies>`
    );

    const popcornMovie = element.shadowRoot.querySelector('[data-testid="popcornMovie"]');

    popcornMovie.dispatchEvent(new CustomEvent("remove-movie", { detail: movies[0] })
    );

    expect(element.movies.length).to.be.equal(1);
  })
});