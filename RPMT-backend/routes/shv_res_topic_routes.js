const express = require("express");
const router = express.Router();
const ResTopic = require("../model/shv_res_topic_model");
const ResTopicController = require("../controllers/shv_res_topic_controller");

router.get("/", ResTopicController.getAllResTopics);
router.post("/", ResTopicController.addResTopics);
router.get("/:id", ResTopicController.getResTopicsById);
router.put("/:id", ResTopicController.updateResTopics);
router.delete("/:id", ResTopicController.deleteResTopics);

module.exports = router;
