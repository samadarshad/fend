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
            continue
        }
        element.classList.remove(className);
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