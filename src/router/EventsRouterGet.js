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

mongoose.connect('mongodb://localhost/dykhEventDB');

router.get("/getEvents", function (req, res) {
    EventModel.find({}).populate('user').exec(function (err, events) {
        if (err) {
            console.log('err est survenue ' + err.message);
            res.json({error: 'error est survenue'});
        } else {
            console.log('Events found = ' + events.count);
            res.json(events);
        }
    });
});

router.get("/getEventByTitle/:title", function (req, res) {
    EventModel.findOne({title: req.params["title"]}).exec(function (err, event) {
        if (err) {
            console.log('err est survenue ' + err.message);
            res.json({error: 'error est survenue'});
        } else {
            console.log('Events found');
            res.json(event);
        }
    });
});


router.get("/getEventsByUser/:id", function (req, res) {
    if (req.body) {

        UserModel.find({_id:req.params["id"]}).exec(function (err, user) {
            if (err) {
                console.log('err est survenue ' + err.message);
                res.json({error: 'error est survenue'});
            } else {
                EventModel.find({user:user}).populate("user").exec(function (err, events) {
                    if (err) {
                        console.log('erreur est survenue ' + err.message);
                        res.json({"error": true, "message": "Something gets wrong"});
                    } else {
                        console.log('Events for this user have been found');
                        console.log(events.user);
                        res.json(events);
                    }
                });
            }
        });
    } else {
        res.json({"error": true, "message": "The body is not correct"});
    }
});

router.get("/getEventsByUserId", function (req, res) {
    if (req.body) {
        EventModel.find({"userId": req.body.userId}).exec(function (err, events) {
            if (err) {
                console.log('erreur est survenue ' + err.message);
                res.json({"error": true, "message": "Something gets wrong"});
            } else {
                console.log('Events for this userId have been found');
                res.json(events);
            }
        });
    } else {
        res.json({"error": true, "message": "The body is not correct"});
    }
});

router.get("/getUsers", function (req, res) {
    UserModel.find({}).exec(function (err, users) {
        if (err) {
            console.log('err est survenue ' + err.message);
            res.json({error: 'error est survenue'});
        } else {
            var usersCount = users.count;
            console.log('Users found = ' + usersCount);
            res.json(users);
        }
    });
});

module.exports = router;