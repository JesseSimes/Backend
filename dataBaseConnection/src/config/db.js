const {default : mongoose} = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(
            //databaseurl needed
        );
        console.log("MongoDB connected");
    }
    catch (error){
        console.log("Error while connecting to DB", error);
    }
};

module.exports=connectDB;