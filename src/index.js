import { generateHomepage } from "./homepage.js";
import { generateMenuPage } from "./menu-page.js";
import { generateAboutPage } from "./about.js";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#about");

generateHomepage();

homeButton.addEventListener("click", generateHomepage);
menuButton.addEventListener("click", generateMenuPage);
contactButton.addEventListener("click", generateAboutPage);