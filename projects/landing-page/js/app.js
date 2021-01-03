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

const NavBar = document.getElementById("navbar__list");
const Sections = document.getElementsByTagName("section");

function respondToTheClick(e) {
    e.preventDefault();
    console.log(e);

    highlightNavbarSection(e.target);

    const id = e.target.firstElementChild.getAttribute("href");
    const element = document.getElementById(id);
    scrollToElement(element);

    makeActiveElement(element);
}

function scrollToElement(element) {
    const topOfElement = element.getBoundingClientRect().top + window.pageYOffset;
    const navBarHeight = NavBar.getBoundingClientRect().height;

    window.scrollTo({
        top: topOfElement - navBarHeight,
        left: 0,
        behavior: 'smooth'
    })
}

function makeActiveElement(element) {
    setOnlyOneElementWithClass(element, Sections, "your-active-class");
}

function highlightSectionInView() {
    const offset = NavBar.getBoundingClientRect().height;
    const element = getClosestElementToTop(Sections, offset);
    makeActiveElement(element);

    const navBarElement = NavBar.querySelector(`[href=${element.id}]`).parentElement;
    highlightNavbarSection(navBarElement);
}



function highlightNavbarSection(navBarElement) {
    const sections = NavBar.getElementsByTagName("li");
    setOnlyOneElementWithClass(navBarElement, sections, "selected");
}


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


appendSectionsToNavBar(NavBar);
NavBar.addEventListener('click', respondToTheClick);
document.addEventListener('scroll', throttle(highlightSectionInView, 100));