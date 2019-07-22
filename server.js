const express = require("express");


var app = express();
var PORT = process.env.PORT || 8080;



var friends = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//This is where front end scripts, stylesheets and other assets live
app.use(express.static(__dirname + '/app/public'));



require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
