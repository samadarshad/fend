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