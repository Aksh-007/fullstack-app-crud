import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required : [true, "Name is Required"],
        trim:true,
        maxlength : [25, "Name must be not more than 25 charcter"]
    },
    email:{
        type:String,
        required:[true, "email is required"],
        unique: true,

    },
});

export default mongoose.model("User", userSchema);