const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

const routes = require('./routes');
routes(app);

const authRoutes = require('./middleware'); 
app.use(authRoutes);

app.listen(3000, () => {
    console.log(`Server started on port`);
});
