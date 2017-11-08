/*import User  from '../User';
import Event from  '../Event'*/

let mongoose    = require("mongoose");

let eventSchema = {
    "sliceTime": String,
    "location": String,
    "title": String,
    "story": String,
    "theme": String,
    "isValidate": Boolean,
    "locationModernCalling": String,
    "longitude": Number,
    "latitude": Number,
    "userId": String,
    "user": {type: mongoose.Schema.Types.ObjectId, ref: 'user' }
    }
;
module.exports = mongoose.model('event', eventSchema);
