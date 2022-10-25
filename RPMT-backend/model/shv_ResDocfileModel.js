const mongoose = require('mongoose');

const ResDocSchema = mongoose.Schema(
  {
    ResDocFileGroupId: {
      type: String,
      required: true,
      trim: true
    },   
    ResDocFileSupervisor: {
      type: String,
      required: true,
      trim: true
    },
    ResDocFileTopic: {
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

const File = mongoose.model('resdocschema', ResDocSchema);

module.exports = File;