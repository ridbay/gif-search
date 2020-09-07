// Require Libraries
const express = require("express");

//App setup
const app = express();

// Middleware

// Routes
app.get("/", (req, res)=>{
    res.send("Hello Gif Search")
})
// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Gif Search App listening on port localhost:${PORT}!`);
});
