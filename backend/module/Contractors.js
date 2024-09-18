const mongoose = require("mongoose");

// Define the schema for CompanyUser
const ContractorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        unique: true, 
        required: true, 
    },
    password: {
        type: String,
        required: true, 
    },
    labor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Labor',
      
    }]
}, {timestamps : true});


const ContractorModule = mongoose.model('Contractor', ContractorSchema);

module.exports = ContractorModule;
