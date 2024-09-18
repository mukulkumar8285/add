const bcrypt = require("bcrypt");
const LaborData = require("../module/labors");

const CreateLabor = async(req , res)=>{
const {name , email , password , phone , role , contractor} = req.body;
console.log(name , email , password , phone , role);

    try{
        if(!name || !email  || !password || !phone || !Array.isArray(contractor)){
            return res.status(400).json({message : "Please fill all the fields" });
            }
        const laboremail =  await LaborData.findOne({email});
        if(laboremail){
            return res.status(400).json({message : "Email already exists" });
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const  Contract = new LaborData({
            name ,
            email ,
            password : hashPassword ,
            phone ,
            role ,
            contractor
            });
           const  result = await Contract.save();

            res.status(201).json({result });

    }catch(error){
        console.log(error);
        res.status(400).json({
            message : "Error in creating LaborData"
        })
    }
}
const ReadLabor = async(req , res)=>{
    try{
        const  Readlabore = await LaborData.find().populate("contractor");
        res.status(200).json({Readlabore});
    }catch(error){
        console.log(error);
        res.status(400).json({
            message : "Error in reading LaborData"
        })
    }
}
const UpdateLabor = async(req , res)=>{
    const {id} = req.params;
    const {updateData} = req.body;
    try{
        const Updatelabor = await LaborData.findByIdAndUpdate(id , updateData);
        if(Updatelabor){
            res.status(200).json({message : "LaborData updated successfully" });
        }

    }catch(error){
        console.log(error);
        res.status(400).json({
            message : "Error in updating LaborData"
        })
    }
}
const DeleteLabor = async(req , res)=>{
    const { id } = req.params;
    try{
        if(!id){
            return res.status(400).json({message : "Please provide an ID"})
        }
        const deletedContractor = await LaborData.findByIdAndDelete(id)
        if(!deletedContractor){
            return res.status(404).json({message : "Contractor not found"})
            }
         res.status(200).json({
            message : "Contractor deleted successfully",
         })   
    }
    catch(err){
        console.log(err);
        }
}


const LaborController = {
    CreateLabor,
    ReadLabor,
    UpdateLabor,
    DeleteLabor
}

module.exports = LaborController;