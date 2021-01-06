(function(exports){

    exports.getData = async function ( url = '' ) {         
          try {
          const response = await fetch(url); 
          const newData = response.json();
          return newData
          } catch(error) {
          console.log("error", error);
          }
     };

     exports.postData = async function ( url = '', data = {}) {         
          try {
               const response = await fetch(url, {
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
  
  }(typeof exports === 'undefined' ? this.requests = {} : exports));