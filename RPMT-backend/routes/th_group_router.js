const express = require("express");
const router = express.Router();
const group = require("../model/th_group_model");
const groupController = require("../controllers/th_group_reg_controller");

router.get("/",groupController.getAllGroups);
router.post("/",groupController.addGroup);
router.get("/:id",groupController.getById);
router.put("/:id", groupController.updateGroup);
router.delete("/:id",groupController.deleteGroup);
module.exports = router