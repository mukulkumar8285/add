const mongoose = require("mongoose");

const LaborSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: false, 
        sparse: true 
    },
    role:{
        type:String,
    },
    contractor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contractor",
       
    }],
    // company: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Contractor"
    // }
} , {timestamps : true});

const LaborData = mongoose.model("Labor", LaborSchema);
module.exports = LaborData;
