const mongoose = require('mongoose');

const TemplateSchema = mongoose.Schema(
  {
    templates: {
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

const File = mongoose.model('Templates', TemplateSchema);

module.exports = File;