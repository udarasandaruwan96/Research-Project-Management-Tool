const express = require("express");
const router = express.Router();
const resDpc = require("../model/shv_ResDocfileModel");
const feedbackController = require("../controllers/sug_resdoc_feedback_controller");

router.get("/:id", feedbackController .getById);


module.exports = router;