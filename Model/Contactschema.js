const mongoose = require("mongoose")
//creating schema table
const Contactschema = mongoose.Schema({

    //adding key and values,// to add new data to db then name field field is required in that
    name: { type:String, 
    required: [true, "Name required"] },

    phone:{type:Number,
    required:[true,"phone number required"]}, //constrains

    email:{type:String,
    required:[true,"email required"]}
},
{timestamps:true }   //value is true by boolean true without double quotes
)
module.exports=mongoose.model('constactschema',Contactschema)