export const callToApi = async () => {
  try {
    /* let inputValue = element.shadowRoot.querySelector('[data-testid="input"]');

    inputValue = inputValue.value; */

    const response = await fetch(
      `http://www.omdbapi.com/?s=Star+Wars&apikey=49081783`
    );
    const data = await response.json();
    const dataMovies = data.Search;

    return dataMovies;
  } catch (error) {
    return null;
  }
};
