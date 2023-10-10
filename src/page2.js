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
    navLinks[0].textContent = "Home"
    navLinks[1].textContent = "Menu"
    navLinks[2].textContent = "Contact"
    const firstPageH1 = document.createElement("h1");
    firstPageH1.textContent = "Menu";
    const firstPageH3 = document.createElement("h3");
    firstPageH3.textContent = "Sub";
    const firstPageP2 = document.createElement("p");
    firstPageP2.classList.add("card");
    firstPageP2.textContent = `When it comes to our menu, this is pretty much it! We do one thing, and we do it well. Enoy a sub so delicious that you'll want to give it a literal hug.`;
    const firstPageImage = document.createElement("img");
    firstPageImage.setAttribute("src", image2)
    contentArea.append(firstPageH1, firstPageH3, firstPageP2, firstPageImage);
    
}

export { buildPageTwo };