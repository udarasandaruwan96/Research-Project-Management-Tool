const path = require('path');
const express = require('express');
const multer = require('multer');
const File = require('../model/shv_ResDocfileModel');
const Router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './ResDocfiles');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 20000000 // max file size 20MB 
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf|doc|docx)$/)) {
      return cb(
        new Error(
          'Only Upload Files PDF AND DOCX.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});

Router.post(
  '/Docupload',
  upload.single('file'),
  async (req, res) => {
    try {
      const { ResDocFileGroupId, ResDocFileSupervisor, ResDocFileTopic } = req.body;
      const { path, mimetype } = req.file;
      const file = new File({
        ResDocFileGroupId,
        ResDocFileSupervisor,
        ResDocFileTopic,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('Research Document Uploaded Successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

Router.get('/DocgetAllFiles', async (req, res) => {
  try {
    const files = await File.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});

Router.get('/Docdownload/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});


module.exports = Router;