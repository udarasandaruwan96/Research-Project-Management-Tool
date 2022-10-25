const mongoose = require('mongoose');

const ThesisDocSchema = mongoose.Schema(
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
    ResThesisFileTopic: {
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

const File = mongoose.model('Thesisdocs', ThesisDocSchema);

module.exports = File;