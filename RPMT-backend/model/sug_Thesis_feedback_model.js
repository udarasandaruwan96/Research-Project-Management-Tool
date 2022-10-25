const mongoose = require('mongoose');

const ThesisDocFeedbacksSchema = mongoose.Schema(
  {
    ResThesisFileGroupId: {
      type: String,
      required: true,
      trim: true
    },   
    ResThesisFileSupervisor: {
      type: String,
      required: true,
      trim: true
    },
    Feedback: {
        type: String,
        required: true,
     
      } ,
    EvaluvatedDate: {
        type: String,
        required: true,
      } 
  
  }
);

module.exports = mongoose.model("ThesisDocFeedbacks", ThesisDocFeedbacksSchema );