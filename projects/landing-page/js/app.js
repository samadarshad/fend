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

/**
 * Define Global Variables
 * 
 */
const navBar = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

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
    const navBarHeight = navBar.getBoundingClientRect().height;

    window.scrollTo({
        top: topOfElement - navBarHeight,
        left: 0,
        behavior: 'smooth'
    })
}

function makeActiveElement(element) {
    const sections = document.getElementsByTagName("section");
    for (const section of sections) {
        section.classList.remove("your-active-class");
    }
    element.classList.add("your-active-class");
}

function calcDistanceFromTop(element) {
    const distance = element.getBoundingClientRect().top - navBar.getBoundingClientRect().height;
    return Math.abs(distance);
}

function getClosestElementToTop(elements) {
    var lowest = 0;
    for (var i = 0; i < elements.length; i++) {
        if (calcDistanceFromTop(elements[i]) < calcDistanceFromTop(elements[lowest])) {
            lowest = i;
        }
    }
    element = elements[lowest];
    return element;
}

function highlightSectionInView() {
    const sections = document.getElementsByTagName("section");
    const element = getClosestElementToTop(sections);
    makeActiveElement(element);

    const navBarElement = navBar.querySelector(`[href=${element.id}]`).parentElement;
    highlightNavbarSection(navBarElement);
}



function highlightNavbarSection(navBarElement) {
    const sections = navBar.getElementsByTagName("li");
    for (const section of sections) {
        section.classList.remove("selected");
    }
    navBarElement.classList.add("selected");
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function appendSectionsToNavBar(navBar) {
    const fragment = document.createDocumentFragment();
    const sections = document.getElementsByTagName("section");
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


// Add class 'active' to section when near top of viewport




// Scroll to anchor ID using scrollTO event
appendSectionsToNavBar(navBar);
navBar.addEventListener('click', respondToTheClick);
document.addEventListener('scroll', throttle(highlightSectionInView, 100));


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active