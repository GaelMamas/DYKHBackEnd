/**
 * Created by vm32776n on 10/08/2017.
 */
import {execError, specifyExecError} from "./ErrorHandling";
import  UserModel from "../Model/UserModel";
import  EventModel from "../Model/EventModel";
let mongodb = require("mongodb");

export function subPutEventFunction(body, operationCallback, lastOperation) {
    EventModel.findOne({_id: body._id}).exec(function (err, event) {
        if (err) {
            operationCallback.addError("not found such an event " + body._id);
            if(lastOperation){
                operationCallback.send();
            }
        } else {

            if (body.user !== undefined) {
                UserModel.findOne({_id: body.user}).exec(function (err, user) {
                    if (err) {
                        operationCallback.addError("not found such an event " + body.user);
                        if(lastOperation){
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
                        }else{
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
                }else{
                    operationCallback.addError("not found such an event " + body._id);
                    if (lastOperation) {
                        operationCallback.send();
                    }
                }
            }
        }
    });
}

export function subPutEventFunction2(body, event) {
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

export function subPutUserFunction(body, operationCallback, lastOperation) {
    UserModel.findOne({"_id": body._id}).exec(function (err, user) {
        if (err) {
            operationCallback.addError("not found such a user " + body._id);
            if(lastOperation){
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
                if(lastOperation){
                    operationCallback.send();
                }

            });
        }
    });
}

export function subPutUserFunction2(body, user) {
    if (body.isHistorian !== undefined) {
        user.isHistorian = body.isHistorian;
        console.log("isHistorian has been modified");
    } else {
        console.log("Undefined isHistorian")
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


export function subPostEventFunction(body, operationCallback, lastOperation) {

    if (body.userId) {
        UserModel.findOne({_id: body.userId}).exec(function (err, user) {
            if (err) {
                operationCallback.addError("we do not know such a user " + body.user);
                if(lastOperation){
                    operationCallback.send();
                }
            } else {

                let event = new EventModel();

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
                        operationCallback.addError("An new event has been inserted " +  event.id);
                    }
                    if(lastOperation){
                        operationCallback.send();
                    }
                });
            }
        });

    } else {
        execError("unknown user", operationCallback);
    }
}

export function subDeleteEventFunction(body, operationCallback, lastOperation) {
    EventModel.findOne({"_id": body._id}).exec(function (err, event) {
        if (err) {
            operationCallback.addError("event not found :" + body._id);
            if (lastOperation) {
                operationCallback.send();
            }
        } else {
            if (event) {
                console.log(event);

                EventModel.remove({_id: new mongodb.ObjectId(event._id)}, function (err) {
                    if (err) {
                        operationCallback.addError("event not found :" + body._id);
                    } else {
                        console.log('Deletion succeeded :): ' + event._id);
                        operationCallback.addMessage("user deleted : " + body._id);
                    }
                    if (lastOperation) {
                        operationCallback.send();
                    }
                })
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

export function subDeleteUserFunction(body, operationCallback, lastOperation) {
    UserModel.findOne({"_id": body._id}).exec(function (err, user) {
        if (err) {
            operationCallback.addError("user not found : " + body._id);
            if (lastOperation) {
                operationCallback.send();
            }
        } else {

            if (user) {
                console.log(user);

                UserModel.remove({_id: new mongodb.ObjectId(user._id)}, function (err) {

                    if (err) {
                        operationCallback.addError("user not found : " + user._id);
                    } else {
                        operationCallback.addMessage("user deleted : " + user._id);
                    }
                    if (lastOperation) {
                        operationCallback.send();
                    }
                })
            } else {
                operationCallback.addError("user not found : " + body._id);
                if (lastOperation) {
                    operationCallback.send();
                }
            }
        }
    });
}