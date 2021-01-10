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

console.log(`SERVER_BASE_ENDPOINT_URL ${SERVER_BASE_ENDPOINT_URL}`)

export async function sendForm(text) {
    
    // const requests = Client.clientSideRequests()
    // const messageMaker = new Client.messageScheme();
    const jsonMessage = new Client.messageScheme().getJson(text)    
    const res = await Client.clientSideRequests().postData(`${SERVER_BASE_ENDPOINT_URL}/sentiment`, jsonMessage);
    return res
}

