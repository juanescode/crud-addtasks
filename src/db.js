import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/merndb");
        console.log("La base de datos se conecto con exito")
    } catch (error) {
        console.log(error);
    }
};