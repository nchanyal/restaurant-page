import { generateHomepage } from "./homepage.js";
import { generateMenuPage } from "./menu-page.js";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");

generateHomepage();

homeButton.addEventListener("click", generateHomepage);
menuButton.addEventListener("click", generateMenuPage);