import postModel from "../models/post.model.js"

export const getPosts = async (req, res) => {
    try {
        const Posts = await postModel.find();
        console.log(Posts);

        res.status(200).json("Post creatd successfully")
        
    } catch (error) {
        console.log("Error getting posts");
        res.status(404).json("Error on getting posts", error)
    }
}

export const createPost = (req, res) => {
    const { username, email, password } =  req.body;
    try {
        
    } catch (error) {
        
    }
    res.json("Create Post")
    
}