const mongoose = require('mongoose');

userdata = new mongoose.Schema(
   {
      fullname: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true,
         unique: true
      },
      password: {
         type: String,
         required: true,
      },
      phoneno: {
         type: String,
         required: true,
         unique: true
      }
   },
   {
      timestamps: true
   }
);


module.exports = mongoose.model("User", userdata);