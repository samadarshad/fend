let projectData = {};

module.exports = {
    storeData: async function (data) {
        projectData = data;  
        console.log("projectData:", data);
    },

    getData: async function () {         
        return projectData;
    }
}


