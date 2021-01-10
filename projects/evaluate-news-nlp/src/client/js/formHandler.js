export async function respondToSubmit (event) {
    try {
        event.preventDefault()
        const data = await Client.sendForm()
        await Client.updateUI(data);
    } catch (error) {
        console.log("respondToSubmit error", error);
    }
}

console.log(`SERVER_BASE_ENDPOINT_URL ${SERVER_BASE_ENDPOINT_URL}`)

export async function sendForm() {
    let formText = document.getElementById('name').value
    const requests = Client.clientSideRequests()
    const messageMaker = new Client.messageScheme();
    const jsonMessage = messageMaker.getJson(formText)    
    const res = await requests.postData(`${SERVER_BASE_ENDPOINT_URL}/sentiment`, jsonMessage);
    return res
}

