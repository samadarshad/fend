console.log(share.test());


const generate = document.getElementById("generate");
const feelings = document.getElementById("feelings");
const zip = document.getElementById("zip");
const fetch = window.fetch.bind(window);
const requests = new requestsService.requestsService(fetch);

generate.addEventListener('click', respondToClick);

async function respondToClick () {
    console.log("clicked")
    console.log(feelings.value);
    const newDate = new Date().toDateString();
    let newEntry = new share.dataScheme(null, newDate, feelings.value, zip.value);
    const weatherData = await requests.postData('/api/weather', newEntry.location);
    newEntry.temperatureDegreesCelcius = weatherData.temperatureDegreesCelcius;


    await requests.postData('/api/add', newEntry);
    const data = await requests.getData('/api/all');
    
    // newEntry.getDisplayData();
    console.log(data);
    // window.location.reload(true); 
}

