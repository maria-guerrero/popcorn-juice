export const addCustomGoogleFonts = () => {
  const headID = document.getElementsByTagName("head")[0];
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  headID.appendChild(link);
  link.href = "https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&display=swap";
};
