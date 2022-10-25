const Topicdoc = require("../model/shv_rs_topic_file_model");


  const getById = async (req, res, next) => {
    const id = req.params.id;
    let topic;
    try {
        topic= await Topicdoc.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!topic) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ topic});
  };

  exports.getById = getById;