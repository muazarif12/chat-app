import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body

    try {
        // create user
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All Fields are required" })
        }
        
        if (password.length < 6) {
            return res.status(400).json({ message: "Password should be atleast 6 charachters" })
        }

        const user = await User.findOne({ email: email })
        if (user) return res.status(400).json({ message: "Email already exists" });

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            email: email,
            fullName: fullName,
            password: hashedPassword
        })

        if (newUser) {
            //generate jwt token here
            generateToken(newUser._id,res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic:newUser.profilePic
            });

        }
        else {
            res.status(400).json({message: "Invalid user data"})
        }
        // hash passwords

    } catch (error) {
        console.log("Error in signup controller", error.message);
    }
};

export const login = (req, res) => {
    res.send("login route")
};


export const logout = (req, res) => {
    res.send("logout route")
};
