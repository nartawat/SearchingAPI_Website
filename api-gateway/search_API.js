const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())

port = process.env.PORT || 9000;

var routes = require("../api-gateway/Routes/trip_Route")

routes(app)

app.listen(port, () => console.log(`Listening on port${port}...`));
 