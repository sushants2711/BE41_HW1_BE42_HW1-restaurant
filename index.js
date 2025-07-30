import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.connect.js";
import restaurantRouter from "./routers/restaurant.route.js";

dotenv.config();

const PORT = process.env.PORT || 2000 ;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use("/restaurants", restaurantRouter)



app.listen(PORT, () => {
    console.log(`server started on port http://localhost;${PORT}`)
})