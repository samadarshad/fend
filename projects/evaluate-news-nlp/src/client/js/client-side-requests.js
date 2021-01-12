export function setFetch(fetch) {
    console.log("set fetch");
    global.fetch = fetch
}

export function getFetch() {
    return global.fetch
}
