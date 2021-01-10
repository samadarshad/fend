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
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    const requests = Client.clientSideRequests()
    requests.testR();
    const messageMaker = new Client.messageScheme();
    const jsonMessage = messageMaker.getJson(formText)
    const res = await requests.postData('http://localhost:3000/api/sentiment', jsonMessage);
    return res
}

export async function updateUI(data) {    
    const dataStr = JSON.stringify(data)
    console.log(data.sentence_list[0].text)
    document.getElementById('results').innerHTML = dataStr
}
