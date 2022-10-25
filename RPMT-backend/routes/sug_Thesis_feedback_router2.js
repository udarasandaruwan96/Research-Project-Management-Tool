const express = require("express");
const router = express.Router();
const Resdoc = require("../model/shv_ResThesisfileModel");
const FeedbackController = require("../controllers/sug_Thesis_feedback_controller2");

router.get("/",FeedbackController.getAllThesisdocFeedback);
router.post("/",FeedbackController. addThesisdocFeedback);
router.get("/:id", FeedbackController .getById);
router.put("/:id", FeedbackController.updateThesisdocFeedback);
router.delete("/:id", FeedbackController.deleteThesisdocFeedback);
module.exports = router;