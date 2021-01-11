import "regenerator-runtime/runtime";
import { sendForm } from "../src/client/js/formHandler"

describe('formHandler', () => {
    
    it('sendForm is defined', async done => {
        expect(sendForm).toBeDefined();
        done()
    })

})