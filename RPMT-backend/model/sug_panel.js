const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const panelSchema = new Schema({
  panelID: {
    type: String,
    required: true,
  },
 panelmember1: {
    type: String,
    required: true,
    
  },
panelmember2: {
    type: String,
    required: true,
  },
panelmember3: {
    type: String,
    required: true,
 
  } ,
panelmember4: {
    type: String,
    required: true,
  } 


});

module.exports = mongoose.model("panel", panelSchema);