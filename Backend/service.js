import express from "express";
import app from "./src/app.js";
import dotenv from "dotenv";

import connectdb from "./src/db/db.js";

dotenv.config({
    path:"./.env"
})

const PORT = process.env.PORT || 4000;

connectdb()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((error) => {
    console.error("Mongodb connection error", error);
})

