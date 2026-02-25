import express from "express";
import dotenv from "dotenv";

import swaggerUi from "swagger-ui-express";
import { specs } from "./config/swagger.js";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
    console.log("HEy")
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default app;



