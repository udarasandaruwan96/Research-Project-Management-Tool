const express = require("express");
const router = express.Router();
const topic = require("../model/shv_ResThesisfileModel");
const feedbackController = require("../controllers/sug_Thesis_feedback_controller");

router.get("/:id", feedbackController .getById);


module.exports = router;