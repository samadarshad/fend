const fetch = require('node-fetch');

module.exports = {
    getData: async function ( url = '' ) {
      console.log(url)
        
      // await fetch(url).then(response => {
      //   console.log("asyncWrapper", response.json())
      //   return response.json();
      // }).catch(error => {
      //   console.log("error", error)
      // })
        const response = await fetch(url); 
        try {
          const newData = await response.json();
          console.log("asyncWrapper", newData);
          return newData
        } catch(error) {
          console.log("error", error);
        }
    }
}

