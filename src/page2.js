import image2 from './subs2.jpeg';

const buildPageTwo = (container) => {
    
    //Build Nav bar
    const navLinks = [];
    const navButtons = []
    const navArea = document.createElement("nav");
    navButtons[0] = document.createElement("div");
    navButtons[1] = document.createElement("div");
    navButtons[2] = document.createElement("div");
    navLinks[0] = document.createElement("a");
    navLinks[1] = document.createElement("a");
    navLinks[2] = document.createElement("a");
    
    navLinks.forEach((element, i) => {
        element.setAttribute("href", "#");
        element.setAttribute("data-index", i + 1)
        element.textContent = `Page ${i + 1}`
    })


    navButtons.forEach((element, i) => {
        element.classList.add("nav-item")
        element.setAttribute("data-index", i + 1)
        element.append(navLinks[i]);
        navArea.append(element)
    });
    
    navButtons[1].classList.add("nav-item", "active-nav")
    
    //Build content area
    const contentArea = document.createElement("div");
    contentArea.setAttribute("class", "content-area")
    container.append(navArea, contentArea);

    // Populate content area
    const firstPageH1 = document.createElement("h1");
    firstPageH1.textContent = "Menu";
    const firstPageP = document.createElement("p");
    firstPageP.classList.add("card");
    firstPageP.textContent = `Try something delicious!`;
    const firstPageImage = document.createElement("img");
    firstPageImage.setAttribute("src", image2)
    contentArea.append(firstPageH1, firstPageP, firstPageImage);
    
}

export { buildPageTwo };