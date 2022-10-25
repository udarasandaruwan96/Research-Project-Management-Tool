const ResDocFeedback = require("../model/sug_ResDocFeedback_model");

const getAllResdocFeedback = async (req, res, next) => {
    let Feedbacks;

    try{
        Feedbacks=await ResDocFeedback.find();
    }catch{
        console.log(err)
    }

if(!Feedbacks){
    return res.status(404).json({massage:"No feedback found"});
}
return res.status(200).json({Feedbacks})
};


const addResdocFeedback = async (req, res, next) => {
    const { ResDocFileGroupId,ResDocFileSupervisor, ResDocFileTopic,Feedback,EvaluvatedDate} = req.body;
    let Feedbacks;
    try {
        Feedbacks = new ResDocFeedback({
            ResDocFileGroupId,
            ResDocFileSupervisor, 
            ResDocFileTopic,
            Feedback,
            EvaluvatedDate
      });
      await Feedbacks.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!Feedbacks) {
      return res.status(500).json({ message: "Unable To Add" });
    }

    return res.status(201).json({ Feedbacks });
  };
  const updateResdocFeedback= async (req, res, next) => {
    const id = req.params.id;
    const {  ResDocFileGroupId,ResDocFileSupervisor, ResDocFileTopic,Feedback,EvaluvatedDate} = req.body;
    let Feedbacks;
    try {
        Feedbacks = await ResDocFeedback.findByIdAndUpdate(id, {
            ResDocFileGroupId,
            ResDocFileSupervisor, 
            ResDocFileTopic,
            Feedback,
            EvaluvatedDate
      });
      Feedbacks = await Feedbacks.save();
    } catch (err) {
      console.log(err);
    }
    if (!Feedbacks) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({Feedbacks});
  };

  const deleteResdocFeedback= async (req, res, next) => {
    const id = req.params.id;
    let   Feedbacks;
    try {
        Feedbacks = await ResDocFeedback.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!Feedbacks) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
  
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let Feedbacks;
    try {
        Feedbacks= await ResDocFeedback.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!Feedbacks) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ Feedbacks });
  };




exports.getAllResdocFeedback = getAllResdocFeedback;
exports.addResdocFeedback=addResdocFeedback;
exports.updateResdocFeedback=updateResdocFeedback;
exports.deleteResdocFeedback=deleteResdocFeedback;
exports.getById = getById;