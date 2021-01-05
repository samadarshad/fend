const projectData = [];

module.exports = {
    storeData: async function (data) {        
        try {            
            console.log("adding:", data);
            projectData.push(data);
            console.log(projectData);
        } catch(error) {
            console.log("error", error);
        }
    },

    getData: async function () {        
        try {            
            return projectData;
        } catch(error) {
            console.log("error", error);
        }
    }
}


