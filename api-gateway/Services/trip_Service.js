const fs = require("fs");
const path = require("path");
let rawdata = fs.readFileSync(
     path.resolve("../../Nartawat_Wongnai_Assigment/json-server/db.json")
   );
let objData = JSON.parse(rawdata);

exports.searchTripByKeyWord = (keyword) => {
     let results = [];
     for (let i = 0; i < objData.trips.length; i++) {
       if (objData.trips[i].title.indexOf(keyword) != -1) {
         results.push(objData.trips[i]);
         continue;
       } else if (objData.trips[i].tags.indexOf(keyword) != -1) {
         results.push(objData.trips[i]);
         continue;
       } else if (objData.trips[i].description.indexOf(keyword) != -1) {
         results.push(objData.trips[i]);
         continue;
       }
     }
     return results;                                                                      
};