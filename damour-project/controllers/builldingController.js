const buildingModel = require('../models/buildingModel');

// const userModel = require('../models/userModel')
//////////create a building ///////////
exports.createBuilding = async (req, res)=>{
    try {
        const {code} = req.body;
        const findCode = await buildingModel.getBuildingByCode(code);

        if(findCode){
            res.status(400).send('this code has been taken')
        }else{
        const {name, code, address} = req.body;
        const result = await buildingModel.createBuilding(name, code, address);
        res.status(200).send({success: true, data : result})
        }
        
    } catch (error) {
        res.status(500).send({success:false, message: error})
    }
     
} 


//////////update building by adding apartment//////////
exports.createApt = async (req, res) =>{
    try {
        const {code} = req.params;
        const {capacity, vacancies}  = req.body;

        const result = await buildingModel.addApartment(code, capacity, vacancies)
        console.log(result)
        res.send(result)
    } catch (error) {
        res.status(400).send('error')
    }
}


//////////// checkin ////////////
exports.checkin = async (req,res)=>{
    
const {email, buildingcode, aptcode} = req.body
try{
   const updat = await buildingModel.checkin(buildingcode, aptcode, email);
   
    res.json(updat)
}catch(err){
console.log(err.message);
}

}

//////////// checkout ////////////
exports.checkout = async (req,res)=>{
    
    const {email, buildingcode, aptcode} = req.body
    try{
       const updat = await buildingModel.checkout(buildingcode, aptcode, email);
       res.json(updat)
    }catch(err){
    console.log(err.message);
    }
    
    }