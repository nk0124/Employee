
const mongoose = require('mongoose');
const { Schema } = mongoose;

const empSchema = new Schema({
  firstName: {type: String,required:true},
  lastName: {type: String,required:true},
  emailId: {type: String,required:true},
  phoneNo:{type:Number,required:true},
  address:{type:String,required:true},
  city: {type: String,required:true},
  state: {type: String,required:true},
  gender:{type:String,required:true},
  dob:{type:Date,required:true},
  dept:{type:String,required:true},
  salary:{type:Number,required:true},
  doj:{type:Date,required:true},
  inTime:{type:String,required:true},
  outTime:{type:String,required:true},
  empType:{type:String,required:true},
  designation:{type:String,required:true},
  working:{type:Boolean,default:true},
  addeddate: {type: Date, default: Date.now }
});

 module.exports = mongoose.model('Emp',empSchema ,'Emp');


 
