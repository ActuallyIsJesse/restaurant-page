import { buildPageOne } from "./page1";

const content = document.querySelector('#content');
buildPageOne(content);

const page = (function () {
    function navbarClickHandler() {
        clearContainer(content);
    }

    function clearContainer(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    function setNavListeners() {
        //Set event listener on every nav link element that isn't active

        let navItems = document.querySelectorAll('.nav-item')
        navItems.forEach(element => {
            element.removeEventListener("click", navbarClickHandler);
        })
        Array.from(navItems).filter((element) => !element.classList.contains("active-nav")).forEach(element => {
            element.addEventListener("click", navbarClickHandler);
        });
    }

    return ({ navbarClickHandler, clearContainer, setNavListeners })
})();

page.setNavListeners()
