async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    let res = await fetch('http://localhost:3000/api/test');
    
    console.log(res)
    document.getElementById('results').innerHTML = "abc"//res.json().message
    
}

export { handleSubmit }
