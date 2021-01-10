import { checkForName } from './js/nameChecker'
import { respondToSubmit, handleSubmit } from './js/formHandler'
import requestsServiceClass from './js/requests'
import { test } from './js/requests'
// import { testshare } from '../shared/testshare.js'
// import { requestsService } from '../shared/requests.js'

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
    handleSubmit,
    requestsServiceClass, 
    // testshare,
    test
}
// console.log("testing");
// const fetch = window.fetch.bind(window);
// const requests = new Client.requestsServiceClass(fetch);
// requests.testR();
// // console.log(Client.testshare())
// // console.log(Client.test())
// console.log("end test");

let user_input = document.getElementsByClassName('user-input');
for (const element of user_input) {
    console.log("addEventListener");
    element.addEventListener("submit", function(e) {
     e.preventDefault();
    //  Client.respondToSubmit(e);




        console.log("testing");
        const fetch = window.fetch.bind(window);
        const requests = new Client.requestsServiceClass(fetch);
        requests.testR();
        Client.test()
        console.log("end test");
    });
    // element.addEventListener("submit", Client.respondToSubmit);
}

