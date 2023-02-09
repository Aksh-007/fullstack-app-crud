//here we write logic of app
import userModel from '../models/user.schema.js'

export const homeController = (req_, res) => {
    res.send("App is running from home controller ");
}

export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        //check all the details
        if (!name || !email) {
            throw new Error("name and email are required");
        }

        const userExist = await userModel.findOne({ email });
        if (userExist) {
            throw new Error("Email already Exist");
        }

        const newUser = await userModel.create({ name, email });
        res.status(201).json({
            success: true,
            message: `User Created Succesfully`,
            newUser
        });
    }
    catch (error) {
        console.log(error);
    }

};

// here we are getting all users from database 
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({
            success: true,
            users,
        })

    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};


