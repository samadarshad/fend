export async function respondToSubmit (event) {
    try {
        await Client.handleSubmit(event)
        // await updateUI();
    } catch (error) {
        console.log("respondToSubmit error", error);
    }
}

export async function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    const requests = Client.clientSideRequests()
    requests.testR();
    const res = await requests.getData('http://localhost:3000/api/test');
    
    console.log(res)
    document.getElementById('results').innerHTML = res.sentence_list[0].text
    
}



// export { respondToSubmit, handleSubmit }
