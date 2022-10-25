const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GroupSchema = new Schema({

Grp_Leader: {
    type: String,
    required: true,
    
  },
Grp_member2: {
    type: String,
    required: true,
  },
  Grp_member3: {
    type: String,
    required: true,
 
  } ,
  Grp_member4: {
    type: String,
    required: true,
  }, 
  Grp_ID: {
    type: String,
   
  } ,
  Panel: {
    type: String,
    
  } ,
  Finalmarks: {
    type: String,
   
  } 


});

module.exports = mongoose.model("group", GroupSchema);