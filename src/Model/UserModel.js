/**
 * Created by vm32776n on 02/08/2017.
 */

let mongoose = require("mongoose");

let userSchema = {
        "isHistorian": Boolean,
        "name": String,
        "email": String,
        "pwd": String
    }
;
module.exports = mongoose.model('user', userSchema);