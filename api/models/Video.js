const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
        name:{
            type: String,
            required: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
        },
        img:{
            type: String,
        },
        subscribers:{
            type: Number,
            default: 0
        },
        subscriberUsers:{
            type: [String]
        },
    },
    { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);