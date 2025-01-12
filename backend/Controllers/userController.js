import userModel from "../models/user.model.js";

export const getUser =  (req, res) => {
    res.json("hello from users");
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