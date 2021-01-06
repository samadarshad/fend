console.log(share.test());


const generate = document.getElementById("generate");
const feelings = document.getElementById("feelings");
const zip = document.getElementById("zip");

generate.addEventListener('click', respondToClick);

async function respondToClick () {
    console.log("clicked")
    console.log(feelings.value);
    const newDate = new Date().toDateString();
    const newEntry = new share.dataScheme(null, newDate, feelings.value, zip.value);
    await requests.postData('/api/add', newEntry);
    const data = await requests.getData('/api/all');
    
    console.log(data);
    // window.location.reload(true); 
}