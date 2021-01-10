// require('dotenv').config()

// const serverEndpointBaseUrl = process.env.SERVER_BASE_ENDPOINT_URL;

export async function respondToSubmit (event) {
    try {
        event.preventDefault()
        const data = await Client.sendForm()
        await Client.updateUI(data);
    } catch (error) {
        console.log("respondToSubmit error", error);
    }
}

const serverEndpointBaseUrl = 'http://localhost:3000/api'

export async function sendForm() {
    let formText = document.getElementById('name').value
    const requests = Client.clientSideRequests()
    const messageMaker = new Client.messageScheme();
    const jsonMessage = messageMaker.getJson(formText)
    const res = await requests.postData(`${serverEndpointBaseUrl}/sentiment`, jsonMessage);
    return res
}

