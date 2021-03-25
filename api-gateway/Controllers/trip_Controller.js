'use strict'
var services = require("../Services/trip_Service")
exports.searchTrip = function(req,res){
     let listTrips;
     let keyWord = req.query.keyword;
     if (keyWord != null) {
       listTrips = services.searchTripByKeyWord(keyWord);
     } else {
       response.end(); 
     }
     res.send(listTrips);
}

