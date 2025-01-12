import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: savedUser });
  } catch (error) {
    res
      .status(404)
      .json({ message: "User not registered", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" }); 
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(404).json({ message: "Invalid password" });
    }
    //jwt sign

    const secretKey = "veryveryveysecret";
    const jwtToken = jwt.sign({ id: user._id, email: user.email }, secretKey);
    

    return res.cookie("jwt",jwtToken,{
      httpOnly:true,
      maxAge: 24*60*60*1000,
    }).
    status(200).json({ message: "Login successful", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};



export const logoutUser = (req, res) => {
  res.clearCookie("jwt", {httpOnly: true})
  .status(200).json({message: "Logout  Successful"});
}