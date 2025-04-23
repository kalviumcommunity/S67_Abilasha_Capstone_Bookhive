const {connect} = require ('mongoose');

const connectDB = async(URL)=>{
    try{
        await connect (URL);
        console.log ("Connected to the database")
    }
    catch (err){
        console.log("Error connecting to database",err);
    }
}

module.exports = connectDB;