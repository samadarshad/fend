(function(exports){ 

     exports.requestsService = class {
          constructor(fetch) {
               this.fetch = fetch
          }

          getData = async function ( url = '' ) {         
               try {
               const response = await this.fetch(url); 
               const newData = response.json();
               return newData
               } catch(error) {
               console.log("error", error);
               }
          }

          postData = async function ( url = '', data = {}) {         
               try {
                    const response = await this.fetch(url, {
                         method: 'POST',
                         credentials: 'same-origin',
                         headers: {
                              'Content-Type': 'application/json',
                         },
                              body: JSON.stringify(data),
                    });
     
                    const newData = response.json();
                    return newData
               } catch(error) {
                    console.log("error", error);
               }
          };

          
     };  
  
  }(typeof exports === 'undefined' ? this.requestsService = {} : exports));