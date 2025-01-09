

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"]
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "password is required"]
        },
    }, { timestamps: true })


export default mongoose.model('Users', userSchema)
