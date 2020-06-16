const express = require("express");
const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const routes = require("./controllers/burgers_controllers");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT: http://localhost:" + PORT);
});