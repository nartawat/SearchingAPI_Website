module.exports = function(app){
     var trip_controller = require("../Controllers/trip_Controller")

     app.route("/trips").get(trip_controller.searchTrip)
}