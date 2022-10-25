const TopicFeedback = require("../model/sug_TopicDoc_Evaluvate_model");

const getAllTopicdocFeedback = async (req, res, next) => {
    let Feedbacks;

    try{
        Feedbacks=await TopicFeedback.find();
    }catch{
        console.log(err)
    }

if(!Feedbacks){
    return res.status(404).json({massage:"No feedback found"});
}
return res.status(200).json({Feedbacks})
};


const addTopicdocFeedback = async (req, res, next) => {
    const {  ResTopicFileGroupId,ResTopicFilePanel,Feedback,EvaluvatedDate} = req.body;
    let Feedbacks;
    try {
        Feedbacks = new TopicFeedback({
            ResTopicFileGroupId,
            ResTopicFilePanel,
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
  const updateTopicdocFeedback= async (req, res, next) => {
    const id = req.params.id;
    const { ResTopicFileGroupId,ResTopicFilePanel,Feedback,EvaluvatedDate} = req.body;
    let Feedbacks;
    try {
        Feedbacks = await TopicFeedback.findByIdAndUpdate(id, {
            ResTopicFileGroupId,
            ResTopicFilePanel,
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

  const deleteTopicFeedback= async (req, res, next) => {
    const id = req.params.id;
    let   Feedbacks;
    try {
        Feedbacks = await TopicFeedback.findByIdAndRemove(id);
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
        Feedbacks= await TopicFeedback.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!Feedbacks) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ Feedbacks });
  };




exports.getAllTopicdocFeedback = getAllTopicdocFeedback ;
exports.addTopicdocFeedback=addTopicdocFeedback;
exports.updateTopicdocFeedback=updateTopicdocFeedback;
exports.deleteTopicFeedback=deleteTopicFeedback;
exports.getById = getById;