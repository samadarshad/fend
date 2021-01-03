function throttle(callback, limit) {
    var wait = false;
    return function(...args) {
        if (!wait) {
            callback(...args);
            wait = true;
            setTimeout(function() {
                wait = false;
            }, limit);
        }
    }
}

function setOnlyOneElementWithClass(chosenElement, allElements, className) {
    for (const element of allElements) {
        if (element == chosenElement) {
            continue;
        } else {
            element.classList.remove(className);
        }
    }
    chosenElement.classList.add(className);
}

function calcDistanceFromTop(element, offset) {
    const distance = element.getBoundingClientRect().top - offset;
    return Math.abs(distance);
}

function getClosestElementToTop(elements, offset) {
    var lowest = 0;
    for (var i = 0; i < elements.length; i++) {
        if (calcDistanceFromTop(elements[i], offset) < calcDistanceFromTop(elements[lowest], offset)) {
            lowest = i;
        }
    }
    element = elements[lowest];
    return element;
}

function scrollToElement(element, offset) {
    const topOfElement = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
        top: topOfElement - offset,
        left: 0,
        behavior: 'smooth'
    })
}

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "inherit";
}


/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The function to run after scrolling
 */
const ScrollStopTimeoutMs = 100;
var scrollStop = function(callback) {

    // Make sure a valid callback was provided
    if (!callback || typeof callback !== 'function') return;

    // Setup scrolling variable
    var isScrolling;

    // Listen for scroll events
    window.addEventListener('scroll', function(event) {

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {

            // Run the callback
            callback();

        }, ScrollStopTimeoutMs);

    }, false);

};