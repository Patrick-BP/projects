const mongoose = require('mongoose');
const randomCode = require('../middleware/generateCode')
const userModel = require('../models/userModel')

const buildingModel = new mongoose.Schema({
    name: String,
    code: {type: String, unique:true },
    address: String,
    apartments: [
        {   _id:  mongoose.Types.ObjectId,
            code: {type : String,require: true, unique:true}, 
            capacity: Number,
            vacancies: Number,
            residents: [String],
            devices: [
                {
                    code: String,
                    description: String
                }
            ] 
        }
    ]
})
const buildingMod = mongoose.model('buildings', buildingModel)


///////////inserting infos of building
exports.createBuilding = async (name, code, address) => {
    try {
        const builidingDetail = new buildingMod({
            _id: new mongoose.Types.ObjectId(),
           name,
           code :randomCode.generateCode(100,1000),
           address

        });
        const result = await builidingDetail.save()
        return result;
    } catch (error) {
        console.log(error)
    }
}


//////// getting building by code ////////
exports.getBuildingByCode = async(buildCode) =>{
    try {
        const ret = await buildingMod.findOne({code: buildCode})
        return ret;
    } catch (error) {
        return null;
    }
    
}


///////////add apartment ////////////////////
exports.addApartment = async (buildingCode, capacity,vacancies) =>{
    try {
        const  findBuil = await buildingMod.findOne({code : buildingCode})
        
        if(!findBuil){
            throw new error('No Found');
        }else{
            const newApt = {
                _id: new mongoose.Types.ObjectId(),
                code : randomCode.generateCode(1000, 10000),
                capacity,
                vacancies
            }
             const res = await buildingMod.updateOne({code : buildingCode}, {$push : {apartments : newApt}});
             console.log(res)
             return res;
        }

    } catch (error) {
        return null
    }

}


///////////checkin (user and admin are allowed) //////
exports.checkin = async (buildingCode, aptCode, email, guest)=>{
    try {
        
        const building = await buildingMod.findOne({code:buildingCode});
        const apt = building.apartments.find(apt=> apt.code ===  aptCode);

        if(!apt){
              return "Apartment not found.";
        }else{
            const findResident = await buildingMod.findOne({apartments:{$elemMatch:{code :aptCode,residents:email}} });
    
            if(apt.capacity == apt.vacancies){
               return "no apartment available" 
            }else{
                if(!findResident){
                    const updateBuilding = await buildingMod.findOneAndUpdate(
                    {code:buildingCode, "apartments.code": aptCode },
                    { $inc: { "apartments.$.vacancies": 1 }, $push: { "apartments.$.residents":email } },
                     {new : true}
                    );
    
                 
                 return updateBuilding
                }else{
                    return "you are a resident already"
                }
                
            }

        }
      
  
        
    } catch (error) {
        return null;
    }
}




///////////checkOut (user and admin are allowed) //////
exports.checkout = async (buildingCode, aptCode, email)=>{
    try {
        
        const building = await buildingMod.findOne({code:buildingCode});
        const apt = building.apartments.find(apt=> apt.code ===  aptCode);

        if(!apt){
              return "Apartment not found.";
        }else{
            const findResident = await buildingMod.findOne({apartments:{$elemMatch:{code :aptCode,residents:email}} });
    
           
                if(findResident){
                    const updateBuilding = await buildingMod.findOneAndUpdate(
                    {code:buildingCode, "apartments.code": aptCode },
                    { $inc: { "apartments.$.vacancies": -1 }, $pull: { "apartments.$.residents":email } },
                     {new : true}
                    );
    
                 
                 return updateBuilding
                }else{
                    return "no user found"
                }
                
            }

       
  
        
    } catch (error) {
        return null;
    }
}
exports.addResident = async (buildCode, aptCode)=>{


}



/////////// add devices ///////////////////////////

exports.addDevices = async(buildCode, aptCode, description) =>{
    try {
        const findApt = await buildingMod.findOne({code:buildCode, code: aptCode});
        if(!findApt){
            throw new error('Not Found')
        }else{
            
        }
        
    } catch (error) {
        return null;
    }
}