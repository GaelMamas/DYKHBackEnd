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


router.delete("/deleteAnEvent", function (req, res) {
    if (req.body) {
        EventModel.findOne({"_id": req.body._id}).exec(function (err, event) {
            if (err) {
                console.log('erreur est survenue ' + err.message);
                res.json({"error": true, "message": "Something gets wrong"});
            } else {
                var response = {};

                if (event) {
                    console.log(event)

                    EventModel.remove({_id: new mongodb.ObjectId(event._id)}, function (err) {
                        if (err) {
                            response = {"error": true, "message": "Error delating event"};
                        } else {
                            console.log('Deleting OK: ' + event._id);
                            response = {"error": false, "message": "Deleting succeeded"};
                        }

                        res.json(response);
                    })
                } else {
                    console.log("Deleting :( " + req.body._id);
                    response = {"error": true, "message": "Non existing event"};
                    res.json(response);
                }
            }

        });
    } else {
        res.json({"error": true, "message": "The body is not correct"});
    }
});



router.delete("/deleteAnUser", function (req, res) {
    if (req.body) {
        UserModel.findOne({"_id": req.body._id}).exec(function (err, user) {
            if (err) {
                console.log('erreur est survenue ' + err.message);
                res.json({"error": true, "message": "Something gets wrong"});
            } else {
                var response = {};

                if (user) {
                    console.log(user)

                    UserModel.remove({_id: new mongodb.ObjectId(user._id)}, function (err) {
                        if (err) {
                            response = {"error": true, "message": "Error delating user"};
                        } else {
                            console.log('Deleting OK: ' + user._id);
                            response = {"error": false, "message": "Deleting succeeded"};
                        }

                        res.json(response);
                    })
                } else {
                    console.log("Deleting :( " + req.body._id);
                    response = {"error": true, "message": "We do not recognize this user"};
                    res.json(response);
                }
            }

        });
    } else {
        res.json({"error": true, "message": "The body is not correct"});
    }
});

module.exports = router;