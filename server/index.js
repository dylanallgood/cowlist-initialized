const cowRoutes = require('./routes/cowRoutes');
const parser = require('body-parser');
const express = require('express');

const app = express();
const port = 3000;

// middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));

// routes
app.use('/', cowRoutes);

app.listen(port, () => console.log(`listening on port ${port}!`));
