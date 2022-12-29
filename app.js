const express = require('express');

//creating app
const app = express();

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});

app.use(express.static('public')); 
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname }); 
});

//handling static HTML and EJS templates
app.use(express.static('public')); 
app.set('view engine', 'ejs'); 
app.get('/', (req, res) => {
  res.render('index'); //no need for ejs extension
});

//route for catalog
app.get('/catalog', (req, res) => { 
  res.render('catalog');
});

//route for contacts
app.get('/contacts', (req, res) => { 
  res.render('contacts');
});

//pass requests to the router middleware
const router = require('./apis/routes'); 
app.use(router);