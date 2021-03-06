//  This program asks the user to enter any number of burgers that have button options to eat them. When the user clicks on a button, the burger moves from a column with ready to eat burgers to the column with eaten burgers.
//  A big portion of the code was repurposed from the class example on cats.
//
//  Written by Alex Chalyy on 4/28/2019.

var express = require("express");

var PORT = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/catsController.js");

app.use(routes);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
