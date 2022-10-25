const express = require("express");
const router = express.Router();
const panelmember = require("../model/sug_panel");
const panelController = require("../controllers/sug_panel-controllers");

router.get("/",panelController .getAllPanels);
router.post("/",panelController .addpanel);
router.get("/:id", panelController .getById);
router.put("/:id", panelController .updatepanel);
router.delete("/:id", panelController .deletepanel);
module.exports = router;