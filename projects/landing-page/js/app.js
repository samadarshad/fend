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


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function respondToTheClick(e) {
    e.preventDefault();
    console.log(e);
    console.log('A paragraph was clicked.' + e.target.firstElementChild.getAttribute("href"));
    const id = e.target.firstElementChild.getAttribute("href");
    const element = document.getElementById(id);
    const topOfElement = element.getBoundingClientRect().top + window.pageYOffset;
    console.log(topOfElement)
    window.scrollTo({
        top: topOfElement,
        left: 0,
        behavior: 'smooth'
    })
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
const navBar = document.getElementById("navbar__list");
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
// Add class 'active' to section when near top of viewport


navBar.addEventListener('click', respondToTheClick);


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active