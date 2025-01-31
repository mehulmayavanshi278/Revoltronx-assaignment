const mongoose = require("mongoose");

const otpSchema = mongoose.Schema({
   email:{
    type:String
   },
   otp:{
    type:String
   },
   isgenerated:{
    type:Boolean,
    default:false
   },
   createdAt: {
    type: Date,
    default: Date.now,
    expires: 120, // This makes the document automatically deleted after 1 minutes (optional)
  },
});

module.exports.Otp =  mongoose.models.Otp || mongoose.model("Otp", otpSchema);