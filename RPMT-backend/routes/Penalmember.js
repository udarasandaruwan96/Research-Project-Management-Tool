const express = require("express");
const router = express.Router();
const validator = require("email-validator");
const Penalmember = require("./../model/Penalmember");

router.get("/", async (req, res) => {
  const penalmembers = await Penalmember.find();
  res.status(200).json({
    message: "success",
    data: penalmembers,
  });
});

//..........input data..................
router.post("/penalmemberlogin", async (req, res) => {
  try {
    const valid = validator.validate(req.body.email);
    if (!valid) {
      throw new Error("Invalid email, please try again!");
    }
    const penalmember = await Penalmember.findOne({
      email: req.body.email,
    }).select("+password");
    if (!penalmember) {
      throw new Error("User with this email does not exist");
    }

    if (penalmember.password !== req.body.password) {
      throw new Error("Invalid Password");
    }

    penalmember.password = null;

    res.status(200).json({
      message: "success",
      data: penalmember,
    });
  } catch (error) {
    res.status(400).json({
      message: "fail",
      error: error.message,
    });
  }
});

router.post("/penalmemberregister", async (req, res) => {
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

    const penalmember = await Penalmember.findOne({ email });

    if (penalmember) {
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

    await Penalmember.create(req.body).then((penalmember) => {
      penalmember.password = null;
      res.json({
        message: "success",
        data: penalmember,
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

router.delete("/penalmemberregister:id", (req, res) => {
  Penalmember.deleteOne({ _id: req.params.id }, (err, penalmember) => {
    if (err) res.json(err);
    else
      res.status(200).json({
        message: "success",
        data: "Item Deleted Successfully",
      });
  });
});

//..............update.............
router.post("/penalmemberregister:id", (req, res) => {
  Penalmember.findByIdAndUpdate(req.params.id, req.body, async (err, data) => {
    if (err) res.send("error");
    res.json({
      message: "success",
      data: "Item has been updated successfully",
    });
  });
});

//get all data.................................
router.get("/:penalmemberid", async (req, res) => {
  await Penalmember.find({ Id: req.params.id })

    .then((penalmember) => {
      res.json({
        message: "success",
        data: penalmember,
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
