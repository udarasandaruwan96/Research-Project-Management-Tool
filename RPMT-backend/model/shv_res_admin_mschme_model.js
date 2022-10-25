const mongoose = require('mongoose');

const MarkingSchema = mongoose.Schema(
  {
    markingscheme: {
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

const File = mongoose.model('MarkingSchemes', MarkingSchema);

module.exports = File;