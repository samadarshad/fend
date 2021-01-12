import { respondToSubmit, sendForm } from './js/formHandler'
import { updateUI } from './js/ui'
import requestsServiceClass from 'Shared/requests.js'
import { clientSideRequests, setFetch, getFetch, setServerUrl, getServerUrl } from './js/client-side-requests'
import messageScheme from 'Shared/messageScheme.js'

import "regenerator-runtime/runtime";

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
    messageScheme
}
