

import mongoose from "mongoose";
import bcrypt from "bcrypt"
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

userSchema.pre("save", async function (next) {
    const user = this
    const hashedPassword = await bcrypt.hash(user.password, 12)
    user.password = hashedPassword
    next()
})

export default mongoose.model('Users', userSchema)
