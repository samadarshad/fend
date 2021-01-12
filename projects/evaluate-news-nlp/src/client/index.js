// import "regenerator-runtime/runtime";

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

//TODO the below shouldnt be exported into Client Library - there should be a ClientLib.js and an index.js as output
// perhaps the below could go onto index.html as a script?
const fetch = window.fetch.bind(window);
Client.setFetch(fetch)
Client.setServerUrl("/api")
let user_input = document.getElementsByClassName('user-input');
for (const element of user_input) {
    element.addEventListener("submit", e => Client.respondToSubmit(e) );
}

