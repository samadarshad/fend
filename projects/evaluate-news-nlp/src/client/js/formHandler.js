export async function respondToSubmit (event, document) {
    try {
        event.preventDefault()
        let formText = document.getElementById('name').value
        const data = await Client.sendForm(formText)
        await Client.updateUI(data, document);
    } catch (error) {
        console.log("respondToSubmit error", error);
    }
}

export async function sendForm(text) {
    const jsonMessage = new Client.messageScheme().getJson(text)
    const requests = new Client.requestsServiceClass(Client.getFetch());
    const res = await requests.postData(`/api/sentiment`, jsonMessage);
    return res
}


