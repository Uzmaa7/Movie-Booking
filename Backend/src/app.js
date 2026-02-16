import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 4000;

const app = express();


app.get("/", (req, res) => {
    console.log("HEy")
})



export default app;



