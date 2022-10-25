const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResDocFeedbackSchema = new Schema({
  ResDocFileGroupId: {
    type: String,
    required: true,
  },
  ResDocFileSupervisor: {
    type: String,
    required: true,
    
  },
  ResDocFileTopic: {
    type: String,
    required: true,
  },
Feedback: {
    type: String,
    required: true,
 
  } ,
EvaluvatedDate: {
    type: String,
    required: true,
  } 


});

module.exports = mongoose.model("ResDocFeedback", ResDocFeedbackSchema);