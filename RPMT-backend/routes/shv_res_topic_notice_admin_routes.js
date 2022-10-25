const express = require("express");
const router = express.Router();
const ResTopicNotice = require("../model/shv_res_topic_notice_admin_model");
const ResTopicNoticeController = require("../controllers/shv_res_topic_notice_admin_controller");

router.get("/", ResTopicNoticeController.getAllResTopicsNotice);
router.post("/", ResTopicNoticeController.addResTopicsNotice);
router.get("/:id", ResTopicNoticeController.getResTopicsNoticeById);
router.put("/:id", ResTopicNoticeController.updateResTopicsNotice);
router.delete("/:id", ResTopicNoticeController.deleteResTopicsNotice);

module.exports = router;

