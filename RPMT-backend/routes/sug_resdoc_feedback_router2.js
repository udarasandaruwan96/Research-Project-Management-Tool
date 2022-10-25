const express = require("express");
const router = express.Router();
const Resdoc = require("../model/sug_ResDocFeedback_model");
const FeedbackController = require("../controllers/sug_resdoc_feedback_controller2");

router.get("/",FeedbackController.getAllResdocFeedback);
router.post("/",FeedbackController.addResdocFeedback);
router.get("/:id", FeedbackController .getById);
router.put("/:id", FeedbackController.updateResdocFeedback);
router.delete("/:id", FeedbackController.deleteResdocFeedback);
module.exports = router;