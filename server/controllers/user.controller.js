//here we write logic of app
import userModel from '../models/user.schema.js'

export const homeController = (req_, res) => {
    res.send("App is running from home controller ");
}


/******************************************************
 * @POST
 * @route http://localhost:4000/createUser
 * @description create User Controller
 * @parameters  name and email
 * @returns created user
 ******************************************************/
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


/******************************************************
 * @GET
 * @route http://localhost:4000/getallusers
 * @description get All users controller
 * @parameters  no paramater
 * @returns all users in database
 ******************************************************/
export const getAllUsers = async (req_, res) => {
    try {
        // if nothing pass in .find() it will give all document in database
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


;




/******************************************************
 * @EDIT
 * @route http://localhost:4000/editUser/:id
 * @description User edit controller
 * @parameters  userId and edited value
 * @returns Updated user
 ******************************************************/
export const editUser = async (req, res) => {
    try {
        
        const user = await userModel.findByIdAndUpdate(req.params.id , req.body);
        res.status(200).json({
            success:true,
            message:"User updated Succesfully",
            user
        })

    } catch (error) {
        console.log(error)
        res.status(401).json({
            success:false,
            message:error.message,
        });
    }
};


/******************************************************
 * @DELETE
 * @route http://localhost:4000/deleteUser/:id
 * @description User delete controller
 * @parameters  userId 
 * @returns deleted user
 ******************************************************/
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const deleteUser = await userModel.findByIdAndDelete(userId);
        res.status(200).json({
            success:true,
            message: `User Deleted Succesfully`,
            deleteUser,
        })

    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        });
    }
};