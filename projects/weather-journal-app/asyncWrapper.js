const fetch = require('node-fetch');

module.exports = {
    getData: async function ( url = '' ) {
      console.log(url)
        const response = await fetch(url); 
        // fetch(url).then( response => {
        //   return response.json();
        // })   
        try {
          const newData = await response.json();
          return newData
        } catch(error) {
          console.log("error", error);
        }
    }
}

