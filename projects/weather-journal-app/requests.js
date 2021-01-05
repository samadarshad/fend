const fetch = require('node-fetch');

module.exports = {
    getData: async function ( url = '' ) {         
        try {
          const response = await fetch(url); 
          const newData = response.json();
          return newData
        } catch(error) {
          console.log("error", error);
        }
    },

    postData: async function ( url = '', data = {}) {         
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
  }
}

