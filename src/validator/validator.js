const mongoose = require('mongoose');

exports.isValid = (value) => {
  if (typeof value === "undefined" || typeof value === "null") return true;
  if (typeof value === "string" && value.trim().length == 0) return true;
  if (typeof value === "object" && Object.keys(value).length == 0) return true;
  return false;
}
exports.isValidBody = (reqBody) => {
  return Object.keys(reqBody).length == 0;
}

exports.isValidString = (String) => {
    return /\d/.test(String)
  }
  
  exports.isValidPhone = (Mobile) => {
    return /^[6-9]\d{9}$/.test(Mobile)
  };
  
  exports.isValidEmail = (Email) => {
    return  /^([A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6})+$/.test(Email)
  };
  
  exports.isValidPwd = (Password) => {
    if(Password.length < 8 || Password.length > 15){
          return false
    }return true
  }
  
  exports.isValidPincode = (num) => {
    return /^[0-9]{6}$/.test(num);
  }


  exports.isValidObjectId = (objectId) => {
    return mongoose.Types.ObjectId.isValid(objectId);
  }