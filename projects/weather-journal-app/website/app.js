const fetch = window.fetch.bind(window);
const requests = new requestsService.requestsService(fetch);

const generate = document.getElementById("generate");
const feelings = document.getElementById("feelings");
const zip = document.getElementById("zip");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const content = document.getElementById("content");

generate.addEventListener('click', respondToClick);

async function respondToClick () {
    await addNewEntry();
    await updateUI();
}

async function addNewEntry() {
    const newDate = new Date().toDateString();
    let newEntry = new share.dataScheme(null, newDate, feelings.value, zip.value);
    try {
        const weatherData = await requests.postData('/api/weather', newEntry.location);
        newEntry.temperatureDegreesCelcius = weatherData.temperatureDegreesCelcius;
        await requests.postData('/api/add', newEntry);
    } catch (error) {
        console.log("app error", error);
    }
}

async function updateUI() {
    try {
        const data = await requests.getData('/api/mostrecent');
        date.textContent = data.date;
        temp.textContent = data.temperatureDegreesCelcius;
        content.textContent = data.user_input;
    } catch (error) {
        console.log("error", error);
    }
}
