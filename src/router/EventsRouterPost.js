/**
 * Created by vm32776n on 14/04/2017.
 */
let mongoose = require('mongoose');
let express = require("express");
let EventModel = require('../Model/EventModel');
let UserModel = require('../Model/UserModel');
let mongodb = require('mongodb');
let router = express.Router();
mongoose.Promise = require('bluebird');


router.post("/postAnEvent", function (req, res) {
    if (req.body) {

        if(req.body.user) {
            UserModel.findOne({_id: req.body.user}).exec(function (err, user) {
                if (err) {
                    console.log('erreur est survenue ' + err.message);
                    res.json({"error": true, "message": "Something gets wrong"});
                } else {


                    let event = new EventModel();

                    event.userId = req.body.userId;
                    event.sliceTime = req.body.sliceTime;
                    event.location = req.body.location;
                    event.title = req.body.title;
                    event.story = req.body.story;
                    event.theme = req.body.theme;
                    event.isValidate = req.body.isValidate;
                    event.locationModernCalling = req.body.locationModernCalling;
                    event.longitude = req.body.longitude;
                    event.latitude = req.body.latitude;
                    event.user = user;

                    event.save(function (err) {
                        if (err) {
                            console.log('err est survenue ' + err.message);
                            res.json({error: "error"});
                        } else {
                            console.log('New Event Insertion OK');
                            res.json(event);
                        }
                    });
                }
            });

        }else{
            console.log('user unkwon ' + err.message);
            res.json({error: "user unkwon"});
        }


    } else {
        console.log('Something gets wrong');
    }
});

router.post("/postNewUser", function(req, res){
   if(req.body){
       let user = new UserModel();

       user.name = req.body.name;
       user.email = req.body.email;
       user.isHistorian = req.body.isHistorian;
       user.pwd = req.body.pwd;

       console.log(user);

       user.save(function (err){
           if(err){
               console.log('err est survenue ' + err.message);
               res.json({error: "error"});
           }else{
               console.log('New User Insertion OK');
               res.json(user);
           }
       });
   }else{
       console.log('Something gets wrong');
   }
});


router.post("/posttestarray", function (req, res) {
    if (req.body) {

        for (let i = 0; i < req.body.length; i++) {

            let event = new EventModel();

            event.userId = req.body[i].userId;
            event.sliceTime = req.body[i].sliceTime;
            event.location = req.body[i].location;
            event.title = req.body[i].title;
            event.story = req.body[i].story;
            event.theme = req.body[i].theme;
            event.isValidate = req.body[i].isValidate;
            event.locationModernCalling = req.body[i].locationModernCalling;
            event.longitude = req.body[i].longitude;
            event.latitude = req.body[i].latitude;

            event.save(function (err) {
                if (err) {
                    console.log('err est survenue ' + err.message);
                    res.json({error: "error"});
                } else {
                    console.log('Insertion OK');
                    //res.json(event);
                }
            });
        }
    } else {
        console.log('Something gets wrong');
    }
});

router.post("/checkUser", function(req, res){
    UserModel.findOne({email: req.params["email"], name:req.params["name"]}).exec(function (err, user) {
        if(err){
            console.log('erreur est survenue ' + err.message);
            res.json({error: 'error est survenue'});
        }else{
            console.log('Existing user');
            res.json(user)
        }
    })
});


module.exports = router;