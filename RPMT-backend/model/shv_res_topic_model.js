const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResTopicSchema = new Schema({
    ResTopicgroupId: {
    type: String,
    required: true,
  },
    ResTopicsupervisor: {
    type: String,
    required: true,
  },
    ResTopicresearchArea: {
    type: String,
    required: true,
  },
    ResTopicResearchTopic: {
    type: String,
    required: true,
  }
},
{
  timestamps: true
}

);

module.exports = mongoose.model("ResTopic", ResTopicSchema);


