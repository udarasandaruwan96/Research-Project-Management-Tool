const path = require('path');
const express = require('express');
const multer = require('multer');
const File = require('../model/shv_res_admin_mschme_model');
const Router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './MarkingSchemes');
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
  '/Mschemeupload',
  upload.single('file'),
  async (req, res) => {
    try {
      const { markingscheme } = req.body;
      const { path, mimetype } = req.file;
      const file = new File({
        markingscheme,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('Marking Scheme Uploaded Successfully.');
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

Router.get('/MschemegetAllFiles', async (req, res) => {
  try {
    const files = await File.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of Marking Schemes. Try again later.');
  }
});

Router.get('/Mschemedownload/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading Marking scheme. Try again later.');
  }
});


module.exports = Router;