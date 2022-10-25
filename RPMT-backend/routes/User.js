const express = require("express");
const router = express.Router();
const validator = require("email-validator");
const User = require("../model/User");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    message: "success",
    data: users,
  });
});

//..........input data....login..............
router.post("/login", async (req, res) => {
  try {
    const valid = validator.validate(req.body.email);
    if (!valid) {
      throw new Error("Invalid email, please try again!");
    }
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!user) {
      throw new Error("User with this email does not exist");
    }

    if (user.password !== req.body.password) {
      throw new Error("Invalid Password");
    }

    user.password = null;

    res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (er) {
    res.status(400).json({
      message: "fail",
      error: er.message,
    });
  }
});

router.post("/register", async (req, res) => {
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

    const user = await User.findOne({ email });

    if (user) {
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

    await User.create(req.body).then((user) => {
      user.password = null;
      res.json({
        message: "success",
        data: user,
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

router.delete("/register:id", (req, res) => {
  User.deleteOne({ _id: req.params.id }, (err, user) => {
    if (err) res.json(err);
    else
      res.status(200).json({
        message: "success",
        data: "Item Deleted Successfully",
      });
  });
});

//..............update.............
router.post("/register:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, async (err, data) => {
    if (err) res.send("error");
    res.json({
      message: "success",
      data: "Item has been updated successfully",
    });
  });
});

//get all data.................................
router.get("/:userid", async (req, res) => {
  await User.find({ Id: req.params.id })

    .then((user) => {
      res.json({
        message: "success",
        data: user,
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
