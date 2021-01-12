import { respondToSubmit, sendForm, testabc } from './js/formHandler'
import { updateUI } from './js/ui'
import requestsServiceClass from 'Shared/requests.js'
import { clientSideRequests, setFetch, getFetch, setServerUrl, getServerUrl } from './js/client-side-requests'
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
    setFetch,
    getFetch,
    setServerUrl,
    getServerUrl,
    messageScheme,


    testabc
}

//TODO the below shouldnt be exported into Client Library - there should be a ClientLib.js and an index.js as output
// perhaps the below could go onto index.html as a script?
// const fetch = window.fetch.bind(window);
// Client.setFetch(fetch)
// let user_input = document.getElementsByClassName('user-input');
// for (const element of user_input) {
//     element.addEventListener("submit", e => Client.respondToSubmit(e) );
// }

