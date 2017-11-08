/**
 * Created by vm32776n on 02/08/2017.
 */
let mongoose = require('mongoose');
let express = require("express");
let EventModel = require('../Model/EventModel');
let UserModel = require('../Model/UserModel');
let mongodb = require('mongodb');
let router = express.Router();
mongoose.Promise = require('bluebird');


router.put("/putAnEvent", function (req, res) {
    if (req.body) {
        EventModel.findOne({_id: req.body._id}).exec(function (err, event) {
            if (err) {
                console.log('erreur est survenue ' + err.message);
                res.json({"error": true, "message": "Something gets wrong"});
            } else {
                var response = {};

                if (req.body.user !== undefined) {
                    UserModel.findOne({_id: req.body.user}).exec(function (err, user) {
                        if (err) {
                            console.log('erreur est survenue ' + err.message);
                            res.json({"error": true, "message": "Something gets wrong"});
                        } else {

                            subPutEventFunction(req, event, response);
                            event.user = user;

                            event.save(function (err) {
                                if (err) {
                                    console.log('err est survenue ' + err.message);
                                    res.json({error: "error"});
                                } else {
                                    console.log('Modify with success');
                                    res.json(event);
                                }
                            });
                        }
                    });
                    console.log("Modified user");


                } else {
                    console.log('user either is not on the modification or is unkwon ' + err.message);

                    subPutEventFunction(req, event, response);
                    event.save(function (err) {
                        if (err) {
                            response = {"error": true, "message": "Something gets wrong " + err.message};
                        } else {
                            response = {"error": false, "message": "Modify with success"}
                        }

                        res.json(response);
                    });
                }
            }
        })
    } else {
        res.json({"error": true, "message": "The body is not correct"});
    }
});

router.put("/putAnUser", function (req, res) {
    if (req.body) {
        UserModel.findOne({"_id": req.body._id}).exec(function (err, user) {
            if (err) {
                console.log('erreur est survenue ' + err.message);
                res.json({"error": true, "message": "Something gets wrong"});
            } else {
                var response = {};

                if (req.body.isHistorian !== undefined) {
                    user.isHistorian = req.body.isHistorian;
                    console.log("isHistorian has been modified");
                } else {
                    response = {"error": true, "message": "Undefined isHistorian"};
                    console.log("Undefined isHistorian");
                }

                if (req.body.name !== undefined) {
                    user.name = req.body.name;
                    console.log("name has been modified");
                } else {
                    response = {"error": true, "message": "Undefined name"};
                    console.log("Undefined name");
                }

                if (req.body.email !== undefined) {
                    user.email = req.body.email;
                    console.log("email has been modified");

                } else {
                    response = {"error": true, "message": "Undefined email"};
                    console.log("Undefined email");
                }

                user.save(function (err) {
                    if (err) {
                        response = {"error": true, "message": "Something gets wrong " + err.message};
                        console.log("Something gets wrong");
                    } else {
                        response = {"error": false, "message": "Modify with success"}
                        console.log("Modify with success");
                    }

                    res.json(response);
                });
            }
        })
    } else {
        res.json({"error": true, "message": "The body is not correct"});
    }
});

function subPutEventFunction(req, event, response) {
    if (req.body.latitude !== undefined) {
        event.latitude = req.body.latitude;
        console.log("Modified latitude");
    } else {
        console.log("Undefined latitude");
        response = {"error": true, "message": "Undefined latitude"};
    }
    if (req.body.longitude !== undefined) {
        event.longitude = req.body.longitude;
        console.log("Modified longitude");
    } else {
        console.log("Undefined longitude");
        response = {"error": true, "message": "Undefined longitude"};
    }
    if (req.body.isValidate !== undefined) {
        event.isValidate = req.body.isValidate;
        console.log("Modified isValidate");
    } else {
        console.log("Undefined isValidate");
        response = {"error": true, "message": "Undefined isValidate"};
    }
    if (req.body.theme !== undefined) {
        event.theme = req.body.theme;
        console.log("Modified theme");
    } else {
        console.log("Undefined theme");
        response = {"error": true, "message": "Undefined theme"};
    }
    if (req.body.story !== undefined) {
        event.story = req.body.story;
        console.log("Modified story");
    } else {
        console.log("Undefined story");
        response = {"error": true, "message": "Undefined story"};
    }
    if (req.body.title !== undefined) {
        event.title = req.body.title;
        console.log("Modified title");
    } else {
        console.log("Undefined title");
        response = {"error": true, "message": "Undefined title"};
    }
    if (req.body.location !== undefined) {
        event.location = req.body.location;
        console.log("Modified location");
    } else {
        console.log("Undefined location");
        response = {"error": true, "message": "Undefined location"};
    }
    if (req.body.sliceTime !== undefined) {
        event.sliceTime = req.body.sliceTime;
        console.log("Modified sliceTime");
    } else {
        console.log("Undefined sliceTime");
        response = {"error": true, "message": "Undefined sliceTime"};
    }
}

module.exports = router;