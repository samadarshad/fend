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