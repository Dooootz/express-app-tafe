// import mongoose & bcrypt
import mongoose from "mongoose";
import bcrypt from 'bcrypt';

// initialize schema
const Schema = mongoose.Schema;

// create new schema. Table names, data types, required attribute + error message
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

// decrypt & match user password 
UserSchema.methods.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}



