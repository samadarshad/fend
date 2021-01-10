export async function respondToSubmit (event) {
    try {
        event.preventDefault()
        const data = await Client.sendForm()
        await Client.updateUI(data);
    } catch (error) {
        console.log("respondToSubmit error", error);
    }
}

export async function sendForm() {
    let formText = document.getElementById('name').value
    const requests = Client.clientSideRequests()
    const messageMaker = new Client.messageScheme();
    const jsonMessage = messageMaker.getJson(formText)
    const res = await requests.postData('http://localhost:3000/api/sentiment', jsonMessage);
    return res
}

