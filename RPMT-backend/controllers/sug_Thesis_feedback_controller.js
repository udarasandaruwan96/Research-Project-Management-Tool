const Thesisdoc = require("../model/shv_ResThesisfileModel");


  const getById = async (req, res, next) => {
    const id = req.params.id;
    let thesis;
    try {
        thesis = await Thesisdoc.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!thesis) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({thesis});
  };

  exports.getById = getById;