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
    const res = await requests.getData('http://localhost:3000/api/test');
    return res
}

export async function updateUI(data) {    
    document.getElementById('results').innerHTML = data.sentence_list[0].text    
}
