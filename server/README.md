# Full-Stack Crud App

In this app we are going to learn how to create CRUD{Create, Read, Update, Delete} operation using MERN{MongoDb, Express, ReactJs, NodeJS}

## just follow the Given Step

```
Step 1- Create App.js and Server.js file 
```
```
Step 2- npm init -y or npm init (-y will generate default template )
when package.json file created you will see server.js selected as starting/ entry point of app
```
```
Step 3 - added package npm i express (for Express) and npm i -D nodemon 
(nodemon so we dont have to reload everytime the page save and -D for dev-Dependencies)
```

```
Step 4 - Add "dev":"nodemon server.js" in package.json file so that we can run our dev dependencise (npm dev)
```

```
Step 4 - Add "dev":"nodemon server.js" in package.json file so that we can run our dev dependencise (npm dev)
```
```
Step 5 - Add npm i dotenv mongoose dotenv package for setting up environment variable and mongoose 
(ODM  Object Data Modeling) for interaction with database (MongoDb)
```


```
step 6 - add  import express from 'express';

const app = express();

export default app;
```


```
step 7 - create .env file for setting environment 
			 add PORT = 4000
```

```
STEP 8 - in server.js  import app from './app.js';
const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res)=>{
    console.log(`App is running at http://localhost:${PORT}`);
});
```

```
step 9 - run npm run dev command and your app is running
```
```
step 10 - in app.js import dotenv from "dotenv";
			and  dotenv.onfig()this will config  your Port
```		
```			
step 11 - now create a routes folder and add user.routes.js file
```

```
step 12 - install npm i router to use router
```
```
step 13 - in user.routes.js import express from 'express'
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("App is running ");
});

export default router;
```

```			
step 14 -  in app.js add app.use('/', router );

and the code is like
 import dotenv from "dotenv";
import express from 'express';
import router from "./routes/userRouter.js"
dotenv.config()
const app = express();

app.use('/', router);

export default app;

run the app and app is working fine
```
```
step 15 - create a controller folder and in that folder create user.controller.js file
```
```
step 16 - add this code  in usercontroller 

export const homeController = (req_, res) => {
    res.send("App is running from home controller ");
}
```
```
step 17 - replace userRouter file with - 
	import express from 'express'
const router = express.Router();
import {homeController, userController}  from '../controllers/user.controller.js';

//this is url part 
router.get('/',homeController );
router.get('/user', userController );

export default router;
```

```
step 18 - create  and models folder andin that folder create user.schema.js file
```
```
step 19 - add code in user.schema file
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
```
```
step 20 - create config folder and in that folder create dbConnection.js file
```
```
step 21 - add connection url like MONGO_URL = mongodb://127.0.0.1/fullstackCRUD in dotenv file
```
```
step 22 - in dbConnection add
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = async() =>{

    mongoose
    .connect(process.env.MONGO_URL)
    .then((conn) =>{
        console.log(`Connection is established succesfully to ${conn.connection.host}`);
    })
    .catch((err) =>{
        console.log(err.message);
        process.exit(1);
    })
}
```
```
step 23 - now we have to create controller for createUser so export model from model 
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
            success:true,
            message:`User Created Succesfully`,
            newUser
        });
    }
    catch (error) {
        console.log(error);
    }

};

```
```
step 24 -and create other controller like that
```