

import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        },
        text: {
            type: String,
            required: [true, "comment is required"]
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Comment", commentSchema)