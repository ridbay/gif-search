// Require Libraries
const express = require("express");

//App setup
const app = express();

// Middleware
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes
app.get("/", (req, res) => {
    console.log(req.query)
  res.render("home");
});
app.get("/greetings/:name", (req, res) => {
  const name = req.params.name;
  res.render("greetings", { name });
});
// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Gif Search App listening on port localhost:${PORT}!`);
});
