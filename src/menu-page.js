function generateMenuPage() {
    const contentDiv = document.querySelector("#content");
    const header = document.createElement("h1");
    const paragraph = document.createElement("p");

    contentDiv.textContent = "";
    header.textContent = "There is nothing to see here...";
    paragraph.textContent = "This website is simply a way for me to test using Webpack."

    contentDiv.appendChild(header);
    contentDiv.appendChild(paragraph);
}

export {generateMenuPage};