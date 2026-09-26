const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.mongodb_uri);
        console.log("MongoDB connected")
    }
    catch(error){
        console.log("error while connecting Data Base", error);
    }
}

module.exports= connectDB;