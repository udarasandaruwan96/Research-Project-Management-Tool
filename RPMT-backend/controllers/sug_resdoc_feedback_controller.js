const Feedback = require("../model/shv_ResDocfileModel");


  const getById = async (req, res, next) => {
    const id = req.params.id;
    let feedbacks;
    try {
        feedbacks= await Feedback.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!feedbacks) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ feedbacks});
  };

  exports.getById = getById;
 