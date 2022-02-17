import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'First name must be provided'
    },
    lastName: {
        type: String,
        required: 'Last Name must be required'
    },
    email: {
        type: String,
        unique: true,
        required: 'Please provide an email'
    },
    hashPassword: {
        type: String,
        required: true
    },
    dateJoined: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.methods.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}



