"use strict";

let express             = require('express');
let app                 = express();
let bodyParser          = require('body-parser');

let eventsRouter        = require('./router/Event');
let usersRouter         = require('./router/User');

let port = process.env.port ;

import 'source-map-support/register';
import * as process from "babel-core";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": false}));

app.use('/Event', eventsRouter);
app.use('/User', usersRouter);

app.listen(port || 8080);
console.log('Listening to PORT ' + port || 8080);

