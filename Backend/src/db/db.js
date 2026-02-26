import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})



const connectdb = async () => {

    try{
    
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URL}/${DB_NAME}`);


        console.log(`\n MONGODB connected !! DB HOST: 
        ${connectionInstance.connection.host}`)
    
    }
    catch(error){
        console.error("MONGODB connection FAILED !!", error);
        process.exit(1);
    }
}

export default connectdb;