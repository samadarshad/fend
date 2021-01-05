const fetch = require('node-fetch');

module.exports = {
    getData: async function ( url = '' ) {         
        try {
          const response = await fetch(url); 
          const newData = await response.json();
          return newData
        } catch(error) {
          console.log("error", error);
        }
    }
}

