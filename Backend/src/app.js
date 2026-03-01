import express from "express";
import dotenv from "dotenv";

import swaggerUi from "swagger-ui-express";
import {specs} from "./utils/swagger.js"

// =====Routes imports =====================
import movieRouter from "./routes/movie.routes.js";
import theatreRouter from "./routes/theatre.routes.js";
import authRouter from "./routes/auth.routes.js";


dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/theatres", theatreRouter);
app.use("/api/v1/auth", authRouter);

export default app;



