/* Global Variables */

// Create a new date instance dynamically with JS
const d = new Date();
const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

console.log(share.test());
console.log(newDate);

const generate = document.getElementById("generate");
const feelings = document.getElementById("feelings");

generate.addEventListener('click', respondToClick);

async function respondToClick () {
    console.log("clicked")
    console.log(feelings.value);
    await requests.postData('/api/add', {'data':'test2'});
    const data = await requests.getData('/api/all');

    console.log(data);
    // window.location.reload(true); 
}