const fetch = require('node-fetch');

module.exports = {
    getData: async function ( url = '' ) {
        const response = await fetch(url);    
        try {
          const newData = await response.json();
          return newData
        } catch(error) {
          console.log("error", error);
        }
    }
}

