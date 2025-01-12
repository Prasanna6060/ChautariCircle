import mongoose from "mongoose";

const postSchema = new mongoose.Schema({});

const postModel = mongoose.model("Post", postSchema);

export default postModel;
