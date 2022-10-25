const mongoose = require('mongoose');

const docTopicSchema = mongoose.Schema(
  {
    ResTopicFileGroupId: {
      type: String,
      required: true,
      trim: true
    },
    ResTopicFileSupervisor: {
      type: String,
      required: true,
      trim: true
    },
    ResTopicFileTopic: {
      type: String,
      required: true,
      trim: true
    },
    ResTopicFilePanel: {
      type: String,
      required: true,
      trim: true
    },
    file_path: {
      type: String,
      required: true
    },
    file_mimetype: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const File = mongoose.model('docTopic', docTopicSchema);

module.exports = File;