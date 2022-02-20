// import mongoose
import mongoose from 'mongoose';
// import our created User schema
import { UserSchema } from "../models/userModel.js";
// import bcrypt to hash all user passwords 
import bcrypt from 'bcrypt';

// makes a copy of the schema before executing queries to the DB 
const User = mongoose.model('User', UserSchema);

// add new user controller 
export const addNewUser = (req, res) => {
    // instantiate new user - takes the request body as an arguement or parameter
    const newUser = new User(req.body);
    // uses bcrypt to hash user password 
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);

    // .save function saves document by inserting new document to the DB 
    // takes 2 parameters - err & user 
    newUser.save((err, user) => {
        // if err... then return response status 400 & send error message
        if (err) {
            return res.status(400).send({
                message: err
            });
        
        } else {
            // hide hashed password from end user
            user.hashPassword = undefined;
            // return res status 201 & json data of user
            return res.status(201).json(user);
        }
    })
}

// update user controller
export const updateUser = (req, res) => {
    // findOneAndUpdate(conditions, update, options, callback)  - returns query
    User.findOneAndUpdate({_id: req.params.userID}, req.body, {
        new: true, useFindAndModify: false
    },(err, user) => {
        // if error send err
        if (err) {
            res.send(err);
            // else return response as json
        } else {
            res.json(user);
        }
    })
}

// GET user controller
export const getUsers = (req, res) => {
    // mongoose casts the filter to match the models schema
    // before the command is sent 
    //.find(id, callback)
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            // hide hashed password from end user
            user.hashPassword = undefined;
            // return user data as json
            res.json(user);
        }
    })
}

// GET user by id controller
export const getUserById = (req, res) => {
    // .findById(id, callback) parameters
    User.findById(req.params.userID, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
}

// DELETE user controller
export const deleteUser = (req, res) => {
    // .remove(id, callback) parameters
    // removes all documents the match the user id 
    User.remove({_id: req.params.userID}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: "Deleted Successfully!"
            });
        }
    })
}
