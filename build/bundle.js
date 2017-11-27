(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by vm32776n on 02/08/2017.
 */

var mongoose = __webpack_require__(0);

var userSchema = {
  "isHistorian": Boolean,
  "name": String,
  "email": String,
  "pwd": String
};
module.exports = mongoose.model('user', userSchema);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.execError = execError;
exports.specifyExecError = specifyExecError;
/**
 * Created by vm32776n on 10/08/2017.
 */

function execError(message, res) {
    console.log('error occurred ' + message);
    res.json({ "error": true, "message": "Something went wrong" });
}

function specifyExecError(message, response) {
    console.log(message);
    response = { "error": true, "message": message };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OperationCallback = function () {
    function OperationCallback(res) {
        _classCallCheck(this, OperationCallback);

        this.res = res;
        this.errors = [];
        this.messages = [];
    }

    _createClass(OperationCallback, [{
        key: "addMessage",
        value: function addMessage(message) {
            this.messages.push(message);
        }
    }, {
        key: "addError",
        value: function addError(error) {
            this.errors.push(error);
        }
    }, {
        key: "send",
        value: function send() {
            this.res.json({ messages: this.messages, errors: this.errors });
        }
    }]);

    return OperationCallback;
}();

exports.default = OperationCallback;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*import User  from '../User';
import Event from  '../Event'*/

var mongoose = __webpack_require__(0);

var eventSchema = {
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
    "user": { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
};
module.exports = mongoose.model('event', eventSchema);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subPutEventFunction = subPutEventFunction;
exports.subPutEventFunction2 = subPutEventFunction2;
exports.subPutUserFunction = subPutUserFunction;
exports.subPutUserFunction2 = subPutUserFunction2;
exports.subPostEventFunction = subPostEventFunction;
exports.subDeleteEventFunction = subDeleteEventFunction;
exports.subDeleteUserFunction = subDeleteUserFunction;

var _ErrorHandling = __webpack_require__(3);

var _UserModel = __webpack_require__(2);

var _UserModel2 = _interopRequireDefault(_UserModel);

var _EventModel = __webpack_require__(5);

var _EventModel2 = _interopRequireDefault(_EventModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongodb = __webpack_require__(8); /**
                                   * Created by vm32776n on 10/08/2017.
                                   */
function subPutEventFunction(body, operationCallback, lastOperation) {
    _EventModel2.default.findOne({ _id: body._id }).exec(function (err, event) {
        if (err) {
            operationCallback.addError("not found such an event " + body._id);
            if (lastOperation) {
                operationCallback.send();
            }
        } else {

            if (body.user !== undefined) {
                _UserModel2.default.findOne({ _id: body.user }).exec(function (err, user) {
                    if (err) {
                        operationCallback.addError("not found such an event " + body.user);
                        if (lastOperation) {
                            operationCallback.send();
                        }
                    } else {

                        subPutEventFunction2(body, event);
                        event.user = user;

                        console.log("COucou before");
                        if (event) {
                            console.log("COucou in event");
                            event.save(function (err) {
                                if (err) {
                                    operationCallback.addError("not found such an event " + body._id);
                                } else {
                                    operationCallback.addMessage("Modify with success " + body._id);
                                }
                                if (lastOperation) {
                                    operationCallback.send();
                                }
                            });
                        } else {
                            console.log("COucou out the event");
                            operationCallback.addError("not found such an event " + body._id);
                            if (lastOperation) {
                                operationCallback.send();
                            }
                        }
                    }
                });
                console.log("Modified user");
            } else {
                if (body.user === undefined) {
                    console.log('user is not on the modification');
                } else {
                    console.log('user is unkwon ' + body.user);
                }

                subPutEventFunction2(body, event);

                if (event) {
                    event.save(function (err) {
                        if (err) {
                            operationCallback.addError("not found such an event " + body._id);
                        } else {
                            operationCallback.addMessage("Modify with success " + body._id);
                        }
                        if (lastOperation) {
                            operationCallback.send();
                        }
                    });
                } else {
                    operationCallback.addError("not found such an event " + body._id);
                    if (lastOperation) {
                        operationCallback.send();
                    }
                }
            }
        }
    });
}

function subPutEventFunction2(body, event) {
    if (body.latitude !== undefined) {
        event.latitude = body.latitude;
        console.log("Modified latitude");
    } else {
        console.log("Undefined Undefined latitude");
    }
    if (body.longitude !== undefined) {
        event.longitude = body.longitude;
        console.log("Modified longitude");
    } else {
        console.log("Undefined longitude");
    }
    if (body.isValidate !== undefined) {
        event.isValidate = body.isValidate;
        console.log("Modified isValidate");
    } else {
        console.log("Undefined isValidate");
    }
    if (body.theme !== undefined) {
        event.theme = body.theme;
        console.log("Modified theme");
    } else {
        console.log("Undefined theme");
    }
    if (body.story !== undefined) {
        event.story = body.story;
        console.log("Modified story");
    } else {
        console.log("Undefined story");
    }
    if (body.title !== undefined) {
        event.title = body.title;
        console.log("Modified title");
    } else {
        console.log("Undefined title");
    }
    if (body.location !== undefined) {
        event.location = body.location;
        console.log("Modified location");
    } else {
        console.log("Undefined location");
    }
    if (body.sliceTime !== undefined) {
        event.sliceTime = body.sliceTime;
        console.log("Modified sliceTime");
    } else {
        console.log("Undefined sliceTime");
    }
}

function subPutUserFunction(body, operationCallback, lastOperation) {
    _UserModel2.default.findOne({ "_id": body._id }).exec(function (err, user) {
        if (err) {
            operationCallback.addError("not found such a user " + body._id);
            if (lastOperation) {
                operationCallback.send();
            }
        } else {

            subPutUserFunction2(body, user);

            user.save(function (err) {
                if (err) {
                    operationCallback.addError("could not saved such a user " + body._id);
                } else {
                    operationCallback.addMessage("Modify with success");
                    console.log("Modify with success");
                }
                if (lastOperation) {
                    operationCallback.send();
                }
            });
        }
    });
}

function subPutUserFunction2(body, user) {
    if (body.isHistorian !== undefined) {
        user.isHistorian = body.isHistorian;
        console.log("isHistorian has been modified");
    } else {
        console.log("Undefined isHistorian");
    }

    if (body.name !== undefined) {
        user.name = body.name;
        console.log("name has been modified");
    } else {
        console.log("Undefined name");
    }

    if (body.email !== undefined) {
        user.email = body.email;
        console.log("email has been modified");
    } else {
        console.log("Undefined email");
    }
}

function subPostEventFunction(body, operationCallback, lastOperation) {
    if (body.user) {
        _UserModel2.default.findOne({ _id: body.user }).exec(function (err, user) {
            if (err) {
                operationCallback.addError("we do not know such a user " + body.user);
                if (lastOperation) {
                    operationCallback.send();
                }
            } else {

                var event = new _EventModel2.default();

                event.userId = body.userId;
                event.sliceTime = body.sliceTime;
                event.location = body.location;
                event.title = body.title;
                event.story = body.story;
                event.theme = body.theme;
                event.isValidate = body.isValidate;
                event.locationModernCalling = body.locationModernCalling;
                event.longitude = body.longitude;
                event.latitude = body.latitude;
                event.user = user;

                event.save(function (err) {
                    if (err) {
                        operationCallback.addError("we do not know such a user " + body.user);
                    } else {
                        console.log(event);
                        operationCallback.addError("An new event has been inserted " + event.id);
                    }
                    if (lastOperation) {
                        operationCallback.send();
                    }
                });
            }
        });
    } else {
        (0, _ErrorHandling.execError)("unknown user", res);
    }
}

function subDeleteEventFunction(body, operationCallback, lastOperation) {
    _EventModel2.default.findOne({ "_id": body._id }).exec(function (err, event) {
        if (err) {
            operationCallback.addError("event not found :" + body._id);
            if (lastOperation) {
                operationCallback.send();
            }
        } else {
            if (event) {
                console.log(event);

                _EventModel2.default.remove({ _id: new mongodb.ObjectId(event._id) }, function (err) {
                    if (err) {
                        operationCallback.addError("event not found :" + body._id);
                    } else {
                        console.log('Deletion succeeded :): ' + event._id);
                        operationCallback.addMessage("user deleted : " + body._id);
                    }
                    if (lastOperation) {
                        operationCallback.send();
                    }
                });
            } else {
                console.log("Deletion failed :( " + body._id);
                operationCallback.addError("event not found :" + body._id);
                if (lastOperation) {
                    operationCallback.send();
                }
            }
        }
    });
}

function subDeleteUserFunction(body, operationCallback, lastOperation) {
    _UserModel2.default.findOne({ "_id": body._id }).exec(function (err, user) {
        if (err) {
            operationCallback.addError("user not found : " + body._id);
            if (lastOperation) {
                operationCallback.send();
            }
        } else {

            if (user) {
                console.log(user);

                _UserModel2.default.remove({ _id: new mongodb.ObjectId(user._id) }, function (err) {

                    if (err) {
                        operationCallback.addError("user not found : " + user._id);
                    } else {
                        operationCallback.addMessage("user deleted : " + user._id);
                    }
                    if (lastOperation) {
                        operationCallback.send();
                    }
                });
            } else {
                operationCallback.addError("user not found : " + body._id);
                if (lastOperation) {
                    operationCallback.send();
                }
            }
        }
    });
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ErrorHandling = __webpack_require__(3);

var _OperationCallback = __webpack_require__(4);

var _OperationCallback2 = _interopRequireDefault(_OperationCallback);

var _SubFunctions = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by vm32776n on 10/08/2017.
 */
var mongoose = __webpack_require__(0);
var express = __webpack_require__(1);
var EventModel = __webpack_require__(5);
var UserModel = __webpack_require__(2);
var router = express.Router();
mongoose.Promise = __webpack_require__(7);

mongoose.connect('mongodb://gael:Yusuf2017@mongodb-gael.alwaysdata.net:27017/gael_dykhdb', {
    useMongoClient: true });

router.get("/getEvents", function (req, res) {
    EventModel.find({}).populate('user').exec(function (err, events) {
        if (err) {
            (0, _ErrorHandling.execError)(err.message, res);
        } else {
            console.log('Events found = ' + events.length);
            res.json(events);
        }
    });
}).get("/getEventsByTableItem/:item/:itemValue", function (req, res) {

    var filter = JSON.parse('{"' + req.params.item + '":"' + req.params.itemValue + '"}');
    console.log(filter);
    EventModel.find(filter).exec(function (err, event) {
        if (err) {
            (0, _ErrorHandling.execError)(err.message, res);
        } else {
            console.log('Event found');
            res.json(event);
        }
    });
}).get("/getEventById/:eventId", function (req, res) {
    EventModel.findOne({ _id: req.params["eventId"] }).exec(function (err, event) {
        if (err) {
            (0, _ErrorHandling.execError)(err.message, res);
        } else {
            console.log('Event found');
            res.json(event);
        }
    });
}).get("/getEventsByUser/:userId", function (req, res) {
    if (req.body) {

        UserModel.find({ _id: req.params["userId"] }).exec(function (err, user) {
            if (err) {
                (0, _ErrorHandling.execError)(err.message, res);
            } else {
                EventModel.find({ user: user }).populate("user").exec(function (err, events) {
                    if (err) {
                        (0, _ErrorHandling.execError)(err.message, res);
                    } else {

                        if (events[0] === undefined) {
                            console.log("This user has not any event");
                        } else {
                            console.log('Events for this user have been found');
                            console.log(events.user);
                        }
                        res.json(events);
                    }
                });
            }
        });
    } else {
        res.json({ "error": true, "message": "The body is not correct" });
    }
});

router.post("/postAnEvent", function (req, res) {
    console.log(req.body);
    if (req.body) {
        (0, _SubFunctions.subPostEventFunction)(req, res);
    } else {
        console.log('Something gets wrong');
    }
}).post("/postEventsArray", function (req, res) {
    console.log(req.body);
    if (req.body) {

        for (var i = 0; i < req.body.length; i++) {

            (0, _SubFunctions.subPostEventFunction)(req.body[i], res);
        }
    } else {
        console.log('Something gets wrong');
    }
});

router.put("/putAnEvent", function (req, res) {
    if (req.body) {
        var operationCallback = new _OperationCallback2.default(res);
        (0, _SubFunctions.subPutEventFunction)(req.body, operationCallback, true);
    } else {
        res.json({ "error": true, "message": "The body is not correct" });
    }
}).put('/putManyEvents', function (req, res) {
    if (req.body) {
        var operationCallback = new _OperationCallback2.default(res);
        for (var i = 0; i < req.body.length; i++) {
            (0, _SubFunctions.subPutEventFunction)(req.body[i], operationCallback, i === req.body.length - 1);
        }
    } else {
        res.json({ "error": true, "message": "The body is not correct" });
    }
});

router.delete("/deleteAnEvent", function (req, res) {
    if (req.body) {
        var operationCallback = new _OperationCallback2.default(res);
        (0, _SubFunctions.subDeleteEventFunction)(req, operationCallback, true);
    } else {
        res.json({ "error": true, "message": "The body is not correct" });
    }
}).delete('/deleteManyEvents', function (req, res) {
    if (req.body) {
        var operationCallback = new _OperationCallback2.default(res);
        for (var i = 0; i < req.body.length; i++) {
            (0, _SubFunctions.subDeleteEventFunction)(req.body[i], operationCallback, i === req.body.length - 1);
        }
    } else {
        res.json({ "error": true, "message": "The body is not correct" });
    }
});

module.exports = router;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ErrorHandling = __webpack_require__(3);

var _OperationCallback = __webpack_require__(4);

var _OperationCallback2 = _interopRequireDefault(_OperationCallback);

var _SubFunctions = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by vm32776n on 10/08/2017.
 */
var mongoose = __webpack_require__(0);
var express = __webpack_require__(1);
var UserModel = __webpack_require__(2);
var mongodb = __webpack_require__(8);
var router = express.Router();
mongoose.Promise = __webpack_require__(7);

router.get("/getUsers", function (req, res) {
    UserModel.find({}).exec(function (err, users) {
        if (err) {
            (0, _ErrorHandling.execError)(err.message, res);
        } else {
            var usersCount = users.count;
            console.log('Users found = ' + usersCount);
            res.json(users);
        }
    });
}).get('/getUsersByTableItem/:item/:itemValue', function (req, res) {

    var filter = JSON.parse('{"' + req.params.item + '":"' + req.params.itemValue + '"}');
    UserModel.find(filter).exec(function (err, users) {
        if (err) {
            (0, _ErrorHandling.execError)(err.message, res);
        } else {
            if (users[0] === undefined) {
                console.log("None user has been found");
            } else {
                console.log('We have found some users');
            }
            res.json(users);
        }
    });
});

router.post("/postNewUser", function (req, res) {
    if (req.body) {
        var user = new UserModel();

        user.name = req.body.name;
        user.email = req.body.email;
        user.isHistorian = req.body.isHistorian;
        user.pwd = req.body.pwd;

        console.log(user);

        user.save(function (err) {
            if (err) {
                (0, _ErrorHandling.execError)(err.message, res);
            } else {
                console.log('New User Insertion OK');
                res.json(user);
            }
        });
    } else {
        console.log('Something went wrong');
    }
}).post("/checkUser/", function (req, res) {
    UserModel.findOne(req.body).exec(function (err, user) {
        if (err) {
            (0, _ErrorHandling.execError)(err.message, res);
        } else {
            if (user.name === undefined) {
                console.log("None user has been found");
            } else {
                console.log('We have found one user');
            }
            res.json(user);
        }
    });
});

router.put("/putAnUser", function (req, res) {
    if (req.body) {
        var operationCallback = new _OperationCallback2.default(res);
        (0, _SubFunctions.subPutUserFunction)(req.body, operationCallback, true);
    } else {
        res.json({ "error": true, "message": "The body is not correct" });
    }
}).put("/putManyUsers", function (req, res) {
    if (req.body) {
        var operationCallback = new _OperationCallback2.default(res);
        for (var i = 0; i < req.body.length; i++) {
            (0, _SubFunctions.subPutUserFunction)(req.body, operationCallback, i === req.body.length - 1);
        }
    } else {
        res.json({ "error": true, "message": "The body is not correct" });
    }
});

router.delete("/deleteAnUser", function (req, res) {
    if (req.body) {
        var operationCallback = new _OperationCallback2.default(res);
        (0, _SubFunctions.subDeleteUserFunction)(req.body, operationCallback, true);
    } else {
        res.json({ "error": true, "message": "The body is not correct" });
    }
}).delete("/deleteManyUsers", function (req, res) {
    console.log(req.body);
    if (req.body) {
        var operationCallback = new _OperationCallback2.default(res);
        for (var i = 0; i < req.body.length; i++) {
            (0, _SubFunctions.subDeleteUserFunction)(req.body[i], operationCallback, i === req.body.length - 1);
        }
    } else {
        res.json({ "error": true, "message": "The body is not correct" });
    }
});

module.exports = router;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

var express = __webpack_require__(1);
var app = express();
var bodyParser = __webpack_require__(11);

var eventsRouter = __webpack_require__(9);
var usersRouter = __webpack_require__(10);

//let port = process.env.port ;

//import * as process from "babel-core";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

app.use('/Event', eventsRouter);
app.use('/User', usersRouter);

app.listen(8080);
console.log('Listening to PORT ' + 8080);

/***/ })
/******/ ])));
//# sourceMappingURL=bundle.js.map