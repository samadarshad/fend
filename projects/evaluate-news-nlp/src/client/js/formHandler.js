export async function respondToSubmit (event) {
    try {
        event.preventDefault()
        let formText = document.getElementById('name').value
        const data = await Client.sendForm(formText)
        await Client.updateUI(data);
    } catch (error) {
        console.log("respondToSubmit error", error);
    }
}

export async function sendForm(text) {
    const jsonMessage = new Client.messageScheme().getJson(text)
    const requests = new Client.requestsServiceClass(Client.getFetch());
    const res = await requests.postData(`${Client.getServerUrl()}/sentiment`, jsonMessage);
    return res
}


