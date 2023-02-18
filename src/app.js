const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app = express();
// Paths for express config
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDir));


app.get('', (req, res) => {
    res.render("index", {
        'title': 'TITLE',
        'name': 'Bhavin'
    });
});

app.get('/about', (req, res) => {
    res.render("about", {
        'title': 'about From a static file',

    });
});

app.get('/help', (req, res) => {
    res.render("help", {
        'title': 'help From a static file',

    });
});

app.get("/weather", (req, res) => {
    res.send({
        "weather": "value here",
        "location": "Ahmedabad"
    });
});

app.get('*', (req, res) => {
    res.send("404 page not found");
});

app.listen(3000, () => {
    console.log("server is up and running on 3000")
});