import { respondToSubmit, sendForm } from './js/formHandler'
import { updateUI } from './js/ui'
import requestsServiceClass from 'Shared/requests.js'
import { clientSideRequests } from './js/client-side-requests'
import messageScheme from 'Shared/messageScheme.js'

import "regenerator-runtime/runtime";

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

export {
    respondToSubmit,    
    updateUI,
    sendForm,

    requestsServiceClass,

    clientSideRequests,

    messageScheme
}

let user_input = document.getElementsByClassName('user-input');
for (const element of user_input) {
    element.addEventListener("submit", e => Client.respondToSubmit(e) );
}

