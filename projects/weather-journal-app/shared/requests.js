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
                    console.log("getData error", error);
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
                    if (!response.ok) {
                         return Promise.reject(new Error(response.status));
                    }
                    const newData = response.json();
                    return newData
               } catch(error) {
                    console.log("postData error", error);
               }
          };

          
     };  
  
  }(typeof exports === 'undefined' ? this.requestsService = {} : exports));