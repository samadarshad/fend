/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

// GLOBALS
const NavBar = document.getElementById("navbar__list");
const Sections = document.getElementsByTagName("section");


// SETUP
function appendSectionsToNavBar(navBar) {
    const fragment = document.createDocumentFragment();
    for (const section of Sections) {
        const newNavEl = document.createElement('li');
        newNavEl.innerText = section.getAttribute("data-nav");
        newNavEl.classList.add("menu__link");

        const anchor = document.createElement('a');
        anchor.setAttribute('href', section.getAttribute('id'));
        newNavEl.appendChild(anchor);

        fragment.appendChild(newNavEl);
    }
    navBar.appendChild(fragment);
}

// CALLBACKS

function respondToTheClick(e) {
    e.preventDefault();

    const id = e.target.firstElementChild.getAttribute("href");
    const element = document.getElementById(id);
    scrollToElement(element);
}

function scrollToElement(element) {
    const topOfElement = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
        top: topOfElement - NavBarHeight,
        left: 0,
        behavior: 'smooth'
    })
}

function setStyleActiveElement() {
    const element = getClosestElementToTop(Sections, NavBarHeight);
    setOnlyOneElementWithClass(element, Sections, "your-active-class");

    const chosenNavBarElement = NavBar.querySelector(`[href=${element.id}]`).parentElement;
    const allNavbarElements = NavBar.getElementsByTagName("li");
    setOnlyOneElementWithClass(chosenNavBarElement, allNavbarElements, "selected");
}


appendSectionsToNavBar(NavBar);
const NavBarHeight = NavBar.getBoundingClientRect().height;
NavBar.addEventListener('click', respondToTheClick);
document.addEventListener('scroll', throttle(setStyleActiveElement, 100));