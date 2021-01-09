import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { requestsService } from '../shared/requests.js'

import "regenerator-runtime/runtime";

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

let user_input = document.getElementsByClassName('user-input');
for (const element of user_input) {
    element.addEventListener("submit", function(event) {
        Client.handleSubmit(event)
    })
}

export {
    checkForName,
    handleSubmit,
    requestsService
}