const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TopicDocFeedbackSchema = new Schema({
    ResTopicFileGroupId: {
    type: String,
    required: true,
  },
  ResTopicFilePanel: {
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
module.exports = mongoose.model("TopicDocFeedback", TopicDocFeedbackSchema );