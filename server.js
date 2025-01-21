var express = require("express");

var app = express();

var HTTP_PORT = process.env.PORT || 8080;

// Root route
app.get("/", (req, res) => {
    res.send(`Hello World!<br /><a href='/about'>Go to /about route</a>`);
});


// About route
app.get("/about", (req, res) => {
    res.json({ course: "WEB322", student: "Parshv Gandhi", task: "In-class Assignment 1" });
});

// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`);
});
