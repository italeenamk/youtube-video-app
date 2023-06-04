const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
        userId:{
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        imgUrl:{
            type: String,
            required: true,
        },
        videoUrl:{
            type: String,
            required: true,
        },
        views:{
            type: Number,
            default: 0,
        },
        tags:{
            type: [String],
            default: [],
        },
        likes:{
            type: [String],
            default: [],
        },
        dislike:{
            type: [String],
            default: [],
        },
    },
    { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);