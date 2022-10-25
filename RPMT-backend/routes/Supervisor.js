const express = require("express");
const router = express.Router();
const validator = require("email-validator");
const Supervisor = require("./../model/Supervisor");

router.get("/", async (req, res) => {
  const supervisors = await Supervisor.find();
  res.status(200).json({
    message: "success",
    data: supervisors,
  });
});

//..........input data..................

router.post("/supervisorlogin", async (req, res) => {
  try {
    const valid = validator.validate(req.body.email);
    if (!valid) {
      throw new Error("Invalid email, please try again!");
    }
    const supervisor = await Supervisor.findOne({
      email: req.body.email,
    }).select("+password");
    if (!supervisor) {
      throw new Error("User with this email does not exist");
    }

    if (supervisor.password !== req.body.password) {
      throw new Error("Invalid Password");
    }

    supervisor.password = null;

    res.status(200).json({
      message: "success",
      data: supervisor,
    });
  } catch (error) {
    res.status(400).json({
      message: "fail",
      error: error.message,
    });
  }
});

router.post("/supervisorregister", async (req, res) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const city = req.body.city;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const password = req.body.password;

    const valid = validator.validate(email);

    if (!valid) {
      throw new Error("Invalid email, please try again!");
    }

    const supervisor = await Supervisor.findOne({ email });

    if (supervisor) {
      throw new Error("User with this email exists");
    }

    if (
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !phoneNumber ||
      !email ||
      !password
    ) {
      throw new Error("Empty Fields");
    }

    await Supervisor.create(req.body).then((supervisor) => {
      supervisor.password = null;
      res.json({
        message: "success",
        data: supervisor,
      });
    });
  } catch (error) {
    res.status(400).json({
      message: "fail",
      error: error.message,
    });
  }
});

// .............delete...........
router.delete("/supervisorregister:id", (req, res) => {
  Supervisor.deleteOne({ _id: req.params.id }, (err, supervisor) => {
    if (err) res.json(err);
    else
      res.status(200).json({
        message: "success",
        data: "Item Deleted Successfully",
      });
  });
});
//..............update.............
router.post("/supervisorregister:id", (req, res) => {
  Supervisor.findByIdAndUpdate(req.params.id, req.body, async (err, data) => {
    if (err) res.send("error");
    res.json({
      message: "success",
      data: "Item has been updated successfully",
    });
  });
});

//get all data.................................
router.get("/:supervisorid", async (req, res) => {
  await Supervisor.find({ Id: req.params.id })

    .then((supervisor) => {
      res.json({
        message: "success",
        data: supervisor,
      });
    })
    .catch((err) => {
      res.json({
        message: "fail",
        data: null,
      });
    });
});
module.exports = router;
