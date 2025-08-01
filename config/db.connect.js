import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_URI)
            .then(() => console.log("Db connected"))
            .catch((error) => console.log(`Error occured from Db, ${error}`));
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};
