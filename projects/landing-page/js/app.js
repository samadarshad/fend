// GLOBALS
const NavBar = document.getElementById("navbar__list");
const Sections = document.getElementsByTagName("section");
let NavBarHeight = 0;
const throttleMs = 300;
let scrolling = false;
let mouseOver = false;

// FUNCTIONS
function setDisplayOfNavBar() {
    (mouseOver || scrolling) ? show(NavBar): hide(NavBar);
}

// REGISTER CALLBACKS
document.addEventListener('DOMContentLoaded', function() {
    appendSectionsToNavBar(NavBar, Sections);
    show(NavBar);
    NavBarHeight = NavBar.getBoundingClientRect().height;
});

NavBar.addEventListener('click', function(e) {
    e.preventDefault();

    const id = e.target.firstElementChild.getAttribute("href");
    const element = document.getElementById(id);

    scrollToElement(element, NavBarHeight);
});

document.addEventListener('scroll', function(e) {
    throttle(function() {
        scrolling = true;
        setDisplayOfNavBar();
        const element = getClosestElementToTop(Sections, NavBarHeight);
        setOnlyOneElementWithClass(element, Sections, "your-active-class");

        const chosenNavBarElement = NavBar.querySelector(`[href=${element.id}]`).parentElement;
        const allNavbarElements = NavBar.getElementsByTagName("li");
        setOnlyOneElementWithClass(chosenNavBarElement, allNavbarElements, "selected");
    }, throttleMs)(e);
});

scrollStop(function() {
    scrolling = false;
    setDisplayOfNavBar();
});

document.addEventListener('mousemove', function(event) {
    throttle(function(event) {
        mouseOver = (event.clientY < NavBarHeight);
        setDisplayOfNavBar();
    }, throttleMs)(event);
});