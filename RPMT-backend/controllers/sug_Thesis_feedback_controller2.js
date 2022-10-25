const ThesisDocFeedback = require("../model/sug_Thesis_feedback_model");

const getAllThesisdocFeedback= async (req, res, next) => {
    let Feedbacks;

    try{
        Feedbacks=await  ThesisDocFeedback.find();
    }catch{
        console.log(err)
    }

if(!Feedbacks){
    return res.status(404).json({massage:"No feedback found"});
}
return res.status(200).json({Feedbacks})
};


const addThesisdocFeedback = async (req, res, next) => {
    const {  ResThesisFileGroupId,ResThesisFileSupervisor, Feedback,EvaluvatedDate} = req.body;
    let Feedbacks;
    try {
        Feedbacks = new  ThesisDocFeedback({
            ResThesisFileGroupId,
            ResThesisFileSupervisor,
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



  const updateThesisdocFeedback= async (req, res, next) => {
    const id = req.params.id;
    const {  ResThesisFileGroupId,ResThesisFileSupervisor, Feedback,EvaluvatedDate} = req.body;
    let Feedbacks;
    try {
        Feedbacks = await  ThesisDocFeedback.findByIdAndUpdate(id, {
            ResThesisFileGroupId,
            ResThesisFileSupervisor, 
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

  const deleteThesisdocFeedback= async (req, res, next) => {
    const id = req.params.id;
    let   Feedbacks;
    try {
        Feedbacks = await  ThesisDocFeedback.findByIdAndRemove(id);
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
        Feedbacks= await  ThesisDocFeedback.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!Feedbacks) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ Feedbacks });
  };




exports.getAllThesisdocFeedback=getAllThesisdocFeedback;
exports. addThesisdocFeedback = addThesisdocFeedback ;
exports. updateThesisdocFeedback= updateThesisdocFeedback;
exports.deleteThesisdocFeedback=deleteThesisdocFeedback;
exports.getById = getById;