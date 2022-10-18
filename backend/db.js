const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://yash1910:yash1910@cluster0.kgpgxdz.mongodb.net/test";

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
