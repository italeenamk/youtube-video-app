const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
        userId:{
            type: String,
            required: true,
        },
        videoId:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);