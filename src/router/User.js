/**
 * Created by vm32776n on 10/08/2017.
 */
let mongoose = require('mongoose');
let express = require("express");
let UserModel = require('../Model/UserModel');
let mongodb = require('mongodb');
let router = express.Router();
mongoose.Promise = require('bluebird');

import {execError,} from '../Utilitaries/ErrorHandling';
import OperationCallback from "../Callbacks/OperationCallback";
import {subDeleteUserFunction, subPutUserFunction} from '../Utilitaries/SubFunctions'


router.get("/getUsers", function (req, res) {
    UserModel.find({}).exec(function (err, users) {
        if (err) {
            execError(err.message, res);
        } else {
            let usersCount = users.count;
            console.log('Users found = ' + usersCount);
            res.json(users);
        }
    });
}).get('/getUsersByTableItem/:item/:itemValue', function (req, res) {

    let filter = JSON.parse('{"' + req.params.item + '":"' + req.params.itemValue + '"}');
    UserModel.find(filter).exec(function (err, users) {
        if (err) {
            execError(err.message, res);
        } else {
            if (users[0] === undefined) {
                console.log("None user has been found");
            } else {
                console.log('We have found some users');
            }
            res.json(users)
        }
    })
});

//TODO correct An User to A User
router.post("/postNewUser", function (req, res) {
    if (req.body) {
        let user = new UserModel();

        user.name = req.body.name;
        user.email = req.body.email;
        user.isHistorian = req.body.isHistorian;
        user.pwd = req.body.pwd;

        console.log(user);

        user.save(function (err) {
            if (err) {
                execError(err.message, res);
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
            execError(err.message, res);
        } else {
            if (user.name === undefined) {
                console.log("None user has been found");
            } else {
                console.log('We have found one user');
            }
            res.json(user)
        }
    })
});

router.put("/putAnUser", function (req, res) {
    if (req.body) {
        let operationCallback = new OperationCallback(res);
        subPutUserFunction(req.body, operationCallback, true);
    } else {
        res.json({"error": true, "message": "The body is not correct"});
    }
}).put("/putManyUsers", function (req, res) {
    if (req.body) {
        let operationCallback = new OperationCallback(res);
        for (let i = 0; i < req.body.length; i++) {
            subPutUserFunction(req.body, operationCallback, i === req.body.length - 1);
        }
    } else {
        res.json({"error": true, "message": "The body is not correct"});
    }
});


router.delete("/deleteAnUser", function (req, res) {
    if (req.body) {
        let operationCallback = new OperationCallback(res);
        subDeleteUserFunction(req.body, operationCallback, true);
    } else {
        res.json({"error": true, "message": "The body is not correct"});
    }
}).delete("/deleteManyUsers", function (req, res) {
    console.log(req.body);
    if (req.body) {
        let operationCallback = new OperationCallback(res);
        for (let i = 0; i < req.body.length; i++) {
            subDeleteUserFunction(req.body[i], operationCallback, i === req.body.length - 1);
        }
    } else {
        res.json({"error": true, "message": "The body is not correct"});
    }
});

module.exports = router;