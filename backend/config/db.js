import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://gourmatdash:gourmatdash123@cluster0.pu3ys.mongodb.net/food-del', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};
