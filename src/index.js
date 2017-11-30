"use strict";

let express             = require('express');
let app                 = express();
let bodyParser          = require('body-parser');

let eventsRouter        = require('./router/Event');
let usersRouter         = require('./router/User');



import 'source-map-support/register';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": false}));

app.use('/Event', eventsRouter);
app.use('/User', usersRouter);

app.listen(8000);

console.log('Listening to PORT ' + 8000);

