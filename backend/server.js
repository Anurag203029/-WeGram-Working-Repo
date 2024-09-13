import express, { json } from "express";
dotenv.config();
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import postRoute from "./routes/post.Routes.js";
import notificationRoutes from "./routes/notification.route.js";

import cors from 'cors'

import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
import connectMongoDB from "./db/connect.mongooes.js";
import cookieParser from "cookie-parser";
cloudinary.config({
	cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret:process.env.CLOUDINARY_API_SECRET,
	timeout: 60000 // Set timeout to 60 seconds (60000 ms)
});


const app = express();
app.use(express.json({limit:"5mb"}));
const port =process.env.PORT || 5000 ;
app.use(cors({
	origin: "https://legendary-beignet-721ad7.netlify.app",//frontend code

}))

app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)
app.use(cookieParser());

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/notifications", notificationRoutes);


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    connectMongoDB();
})
