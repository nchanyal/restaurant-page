import { generateHomepage } from "./homepage.js";

const homeButton = document.querySelector("#home");

generateHomepage();

homeButton.addEventListener("click", generateHomepage);