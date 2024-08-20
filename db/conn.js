import mongoose from "mongoose";

const Connection = async () => {
    try {
      
        await mongoose.connect("mongodb+srv://backend-node:pakistan@cluster0.5yf37or.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default Connection