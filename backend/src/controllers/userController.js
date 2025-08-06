import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "All fields are required", success: false });
  }
  try {
    const isUserAlreadyExist = await User.findOne({ email: email });

    if (isUserAlreadyExist) {
      return res
        .status(208)
        .json({
          message: "User already exists. Please enter another email!",
          success: false,
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const newUser = await user.save();
    return res
      .status(201)
      .json({ message: "Registered successfully!", success: true });
  } catch (err) {
    return res.status(500).json({ message: err, success: false });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "All fields are required", success: false });
  }
  try {
    const isUserAlreadyExist = await User.findOne({ email: email });

    if (!isUserAlreadyExist) {
      return res
        .status(208)
        .json({ message: "Invalid credentials!", success: false });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      isUserAlreadyExist.password
    );
console.log(isPasswordCorrect)
    if (!isPasswordCorrect) {
      return res
        .status(208)
        .json({ message: "Invalid credentials!", success: false });
    }
    const secrete = process.env.SECRETE;

    const token =  jwt.sign(
      { id: isUserAlreadyExist._id, email: email },
      secrete,
      { expiresIn: "1h" }
    );

    return res
      .status(200)
      .json({
        message: "Logged in successfully!",
        success: true,
        token: token,
        user: isUserAlreadyExist,
      });
  } catch (err) {
    return res.status(500).json({ message: err, success: false });
  }
};

export default { register, login };
