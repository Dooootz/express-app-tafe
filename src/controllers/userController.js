import mongoose from 'mongoose';
import { UserSchema } from "../models/userModel.js";
import bcrypt from 'bcrypt';

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);

    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            user.hashPassword = undefined;
            return res.status(201).json(user);
        }
    })
}

export const updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.userID}, req.body, {
        new: true, useFindAndModify: false
    },(err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
}

export const getUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            user.hashPassword = undefined;
            res.json(user);
        }
    })
}

export const getUserById = (req, res) => {
    User.findById(req.params.userID, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
}

export const deleteUser = (req, res) => {
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
