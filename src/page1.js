const buildPageOne = (container) => {
    
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
        element.textContent = `Page ${i + 1}`
    })


    navButtons.forEach((element, i) => {
        element.classList.add("nav-item")
        element.append(navLinks[i]);
        navArea.append(element)
    });
    
    navButtons[0].classList.add("nav-item", "active-nav")
    
    //Build content area
    const contentArea = document.createElement("div");
    contentArea.setAttribute("class", "content-area")
    container.append(navArea, contentArea);

    // Populate content area
    const firstPageH1 = document.createElement("h1");
    firstPageH1.textContent = "Billy's Delicious Subs";
    const firstPageP = document.createElement("p");
    firstPageP.classList.add("card");
    firstPageP.textContent = `Here at Billy's Delicious Subs, we pride our selves on making delicious subs. If you haven't
    had one yet, try it—it's delicious!`;
    const firstPageImage = document.createElement("img");
    firstPageImage.setAttribute("src", "./subs.jpeg")
    contentArea.append(firstPageH1, firstPageImage);


}

export { buildPageOne };