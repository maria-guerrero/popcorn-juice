import { addCustomGoogleFonts } from "./utils.js";

export const decorators = [
  Story => {
    addCustomGoogleFonts();
    return Story();
  },
];
