export function clientSideRequests() {
    const fetch = window.fetch.bind(window);
    const requests = new Client.requestsServiceClass(fetch);
    return requests
}
