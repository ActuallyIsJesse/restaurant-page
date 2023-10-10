import image1 from './subs.jpeg';
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
        element.setAttribute("data-index", i + 1)
    })


    navButtons.forEach((element, i) => {
        element.classList.add("nav-item")
        element.setAttribute("data-index", i + 1)
        element.append(navLinks[i]);
        navArea.append(element)
    });
    
    navButtons[0].classList.add("nav-item", "active-nav")
    
    //Build content area
    const contentArea = document.createElement("div");
    contentArea.setAttribute("class", "content-area")
    container.append(navArea, contentArea);

    // Populate content area
    navLinks[0].textContent = "Home"
    navLinks[1].textContent = "Menu"
    navLinks[2].textContent = "Contact"
    const firstPageH1 = document.createElement("h1");
    firstPageH1.textContent = "Billy's Delicious Subs";
    const firstPageP = document.createElement("p");
    const firstPageP2 = document.createElement("p");
    firstPageP.classList.add("card");
    firstPageP2.classList.add("card");
    firstPageP.textContent = `At Billy's Delicious Subs, we're not just about making great sandwiches. We're about making sandwiches that are so good, you'll want to hug them. That's right, hug them. We're talking about subs that are so stacked with fresh, delicious ingredients, you'll need two hands to hold them. And subs that are so flavorful, you'll be savoring every bite long after you're finished eating.`
    firstPageP2.textContent = `So what are you waiting for? Come on down to Billy's Delicious Subs today and experience the subs that are so good, you'll want to hug them!
    P.S. We don't actually recommend hugging our subs. They're hot and squishy, and it could get messy. But we understand if you can't resist.`;
    const firstPageImage = document.createElement("img");
    firstPageImage.setAttribute("src", image1)
    contentArea.append(firstPageH1, firstPageP, firstPageP2, firstPageImage);
    
}

export { buildPageOne };