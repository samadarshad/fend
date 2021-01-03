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
const throttleMs = 300;
const mouseOverToNavBarHeight = 150;
let scrolling = false;
let mouseOver = false;

// REGISTER CALLBACKS
document.addEventListener('DOMContentLoaded', function() {
    appendSectionsToNavBar(NavBar, Sections);
});
NavBar.addEventListener('click', function(event) {
    respondToTheClick(event, NavBar)
});
document.addEventListener('scroll', function(e) {
    throttle(function() {
        scrolling = true;
        console.log("scrolling");
        setDisplayOfNavBar();
        setStyleActiveElement(Sections, NavBar);
    }, throttleMs)(e);
});
scrollStop(function() {
    scrolling = false;
    setDisplayOfNavBar();
});
document.addEventListener('mousemove', function(event) {
    throttle(function(event) {
        setMouseOver(event);
        setDisplayOfNavBar();
    }, throttleMs)(event);

});

// Making NavBar present on page load
setTimeout(function() {
    show(NavBar);
}, 0);


function setDisplayOfNavBar() {
    if (mouseOver || scrolling) {
        show(NavBar);
    } else {
        hide(NavBar);
    }
}

function setMouseOver(e) {
    if (e.clientY < mouseOverToNavBarHeight) {
        mouseOver = true;
    } else {
        mouseOver = false;
    }
}

function appendSectionsToNavBar(navBar, sections) {
    const fragment = document.createDocumentFragment();
    for (const section of sections) {
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
function respondToTheClick(e, navBar) {
    e.preventDefault();

    const id = e.target.firstElementChild.getAttribute("href");
    const element = document.getElementById(id);

    const navBarHeight = navBar.getBoundingClientRect().height
    scrollToElement(element, navBarHeight);
}

function setStyleActiveElement(sections, navBar) {
    const navBarHeight = navBar.getBoundingClientRect().height
    const element = getClosestElementToTop(sections, navBarHeight);
    setOnlyOneElementWithClass(element, sections, "your-active-class");

    const chosenNavBarElement = NavBar.querySelector(`[href=${element.id}]`).parentElement;
    const allNavbarElements = NavBar.getElementsByTagName("li");
    setOnlyOneElementWithClass(chosenNavBarElement, allNavbarElements, "selected");
}