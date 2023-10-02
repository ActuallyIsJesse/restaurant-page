import { buildPageOne } from "./page1";
import { buildPageTwo } from "./page2";
import { buildPageThree } from "./page3";
import './style.css';

const content = document.querySelector('#content');
buildPageOne(content);

const page = (function () {
    function navbarClickHandler(event) {
        console.log(`The event index was ${event.target.dataset.index}`)
        clearContainer(content);
        if (Number(event.target.dataset.index) === 3) {
            buildPageThree(content);
        } else if (Number(event.target.dataset.index) === 2) {
            buildPageTwo(content);
        } else {
            console.log(`Building page ${event.target.dataset.index}...`)
            buildPageOne(content);
        }
        setNavListeners()
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
