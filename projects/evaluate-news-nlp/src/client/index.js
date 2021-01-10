import { checkForName } from './js/nameChecker'
import { respondToSubmit, sendForm, updateUI } from './js/formHandler'
import requestsServiceClass from 'Shared/requests.js'
import { clientSideRequests } from './js/client-side-requests'

import "regenerator-runtime/runtime";

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log("index started");

export {
    checkForName,   

    respondToSubmit,    
    updateUI,
    sendForm,

    requestsServiceClass,
    
    clientSideRequests
}

let user_input = document.getElementsByClassName('user-input');
for (const element of user_input) {
    element.addEventListener("submit", e => Client.respondToSubmit(e) );
}

