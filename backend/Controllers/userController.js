import userModel from "../models/user.model.js";

export const getUser =  async(req, res) => {
    try {
        const allUsers = await userModel.find();
        res.status(200).json({message: "Users found", data: allUsers});
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal server Error")
    }
}

export const createUser = (req, res) => {
    const {username, email, password } = req.body;
    console.log(username, email, password);
    try {
        const newUser = new userModel(
            username, email, password
        )
        newUser.save().then((result) => console.log(result));

    } catch (error) {
        console.log(error)
        res.status(404).json("Username must be given")
    }
}

export const getUserById = async(req, res) => {
    try {
        const id = req.params.id
       const user =await userModel.findById(id);
       if(user) {
           res.status(200).json(user)
       }
    } catch (error) {
        res.status(500).json("Internal server error")
    }
 }