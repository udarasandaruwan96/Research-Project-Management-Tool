const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResTopicNoticeSchema = new Schema({
    ResTopicNoticeHeader: {
    type: String,
    required: true,
    },
    ResTopicNoticeLineOne: {
      type: String,
      required: true,
    },
    ResTopicNoticeLineTwo: {
      type: String,
      required: true,
    },
    ResTopicNoticeLineThree: {
      type: String,
      required: true,
    },
    ResTopicNoticeDueDate:{
      type: String,
      required: true,
  }

});

module.exports = mongoose.model("ResTopicNotice", ResTopicNoticeSchema);