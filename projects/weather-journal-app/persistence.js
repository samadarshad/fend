const projectData = [];

module.exports = {
    storeData: async function (data) { 
        console.log("adding:", data);
        projectData.push(data);
        console.log("all data:", projectData);  
    },

    getData: async function () {         
        return projectData;
    }
}


