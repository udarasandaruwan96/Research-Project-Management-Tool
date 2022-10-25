const express = require("express");
const router = express.Router();
const topic = require("../model/shv_rs_topic_file_model");
const feedbackController = require("../controllers/sug_Topicdoc_feedback_controller1");

router.get("/:id", feedbackController .getById);


module.exports = router;