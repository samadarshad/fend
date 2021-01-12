export function clientSideRequests(fetch) {
    // const fetch = window.fetch.bind(window);
    const requests = new Client.requestsServiceClass(fetch);
    return requests
}

export function setFetch(fetch) {
    console.log("set fetch");
    global.fetch = fetch
}

export function getFetch() {
    return global.fetch
}

export function setServerUrl(url) {
    console.log(`set url ${url}`)
    global.url = url
}

export function getServerUrl() {
    return global.url
}