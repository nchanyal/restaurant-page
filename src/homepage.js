import sushiImage from "./jakub-dziubak-iOHJKJqO6E0-unsplash.jpg";

function generateHomepage() {
    const contentDiv = document.querySelector("#content");
    const header = document.createElement("h1");
    const image = document.createElement("img");

    header.textContent = "Welcome to the Sushi Place!!";
    image.src = sushiImage;

    contentDiv.appendChild(header);
    contentDiv.appendChild(image);
}

export {generateHomepage};