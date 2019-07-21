const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


var friends = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());






// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
