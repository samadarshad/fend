export async function updateUI(data) {
    console.log(data.sentence_list[0].text)
    document.getElementById('results').innerHTML = JSON.stringify(data)
    document.getElementById('agreement').innerHTML = data.agreement
    document.getElementById('subjectivity').innerHTML = data.subjectivity
    document.getElementById('confidence').innerHTML = data.confidence
    document.getElementById('irony').innerHTML = data.irony
}
