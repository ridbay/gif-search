// Require Libraries
const express = require("express");

//App setup
const app = express();

app.use(express.static('public'));


const Tenor = require("tenorjs").client({
    // Replace with your own key
    "Key": "9GACLWOOOBL7", // https://tenor.com/developer/keyregistration
    "Filter": "high", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_NG", // Your locale here, case-sensitivity depends on input
});
// Middleware
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes
app.get('/', (req, res) => {
    // Handle the home page when we haven't queried yet
    term = ""
    if (req.query.term) {
        term = req.query.term
    }
    // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
    Tenor.Search.Query(term, "10")
        .then(response => {
            // store the gifs we get back from the search
            const gifs = response;
            // pass the gifs as an object into the home page
            res.render('home', { gifs })
        }).catch(console.error);
  })
app.get("/greetings/:name", (req, res) => {
  const name = req.params.name;
  res.render("greetings", { name });
});
// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Gif Search App listening on port localhost:${PORT}!`);
});
