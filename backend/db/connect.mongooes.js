import mongoose from "mongoose";

const connectMongoDB=async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(process.env.MONGO_URI)
        console.log(`Mongo connected `);
        
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
        
    }
}
export default connectMongoDB;