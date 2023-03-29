const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    _id :mongoose.Types.ObjectId,
    name : String,
    email : {type : String, unique:true},
    password :String,
    phone : String,
    role: String
    
}, {timeStamp:true})

const userModel =mongoose.model('users', userSchema)

exports.createUser = async (name, email,password,phone,role) => {
    try {
        const user = new userModel({
            _id: new mongoose.Types.ObjectId(),
            name,
            email,
            password,
            phone,
            role

        });
        const result = await user.save()
        return result;
    } catch (error) {
        console.log(error)
    }
}

////// help to avoid duplication based on an email
exports.getUser = async(email) =>{
    try {
        const ret = await userModel.findOne({email})
        // console.log("model ", ret)
        return ret;
    } catch (error) {
        return null;
    }
    
}


/////// update user's information////////
exports.updateUser= async (email, user) => {
    try {
        let res= await userModel.updateOne({ email }, { $set: user});
        return res;
    } catch (error) {
        console.log(error)

    }
}

////////delete user's information //////////////
exports.deleteUser= async (email) => {
    try {
        const res= await userModel.findOneAndDelete({ email });
        return res;
    } catch (error) {
        console.log(error)

    }
}


/////////get all users ////////////
exports.getAllUsers = async () =>{
    try {
        const res = await userModel.find({})
        return res;
    } catch (error) {
        console.log(error);
        
    }
}