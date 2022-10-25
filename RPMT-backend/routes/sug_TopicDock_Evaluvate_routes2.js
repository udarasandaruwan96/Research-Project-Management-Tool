const express = require("express");
const router = express.Router();
const Resdoc = require("../model/sug_TopicDoc_Evaluvate_model");
const FeedbackController = require("../controllers/sug_Topicdoc_feedback_controller2");

router.get("/",FeedbackController.getAllTopicdocFeedback);
router.post("/",FeedbackController.addTopicdocFeedback);
router.get("/:id", FeedbackController .getById);
router.put("/:id", FeedbackController.updateTopicdocFeedback);
router.delete("/:id", FeedbackController.deleteTopicFeedback);
module.exports = router;