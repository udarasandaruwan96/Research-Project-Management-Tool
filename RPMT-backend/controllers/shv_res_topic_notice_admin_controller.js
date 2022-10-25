const ResTopicsNotice = require("../model/shv_res_topic_notice_admin_model");

const getAllResTopicsNotice = async (req, res, next) => {
  let resTopicsNotices;
  try {
    resTopicsNotices = await ResTopicsNotice.find();
  } catch (err) {
    console.log(err);
  }

  if (!resTopicsNotices) {
    return res.status(404).json({ message: "Notice Not found" });
  }
  return res.status(200).json({ resTopicsNotices });
};

const getResTopicsNoticeById = async (req, res, next) => {
  const id = req.params.id;
  let resTopicsNotice;
  try {
    resTopicsNotice = await ResTopicsNotice.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!resTopicsNotice) {
    return res.status(404).json({ message: "Notice Not found" });
  }
  return res.status(200).json({ resTopicsNotice });
};

const addResTopicsNotice = async (req, res, next) => {
  const { ResTopicNoticeHeader, ResTopicNoticeLineOne, ResTopicNoticeLineTwo, ResTopicNoticeLineThree, ResTopicNoticeDueDate } = req.body;
  let resTopicsNotice;
  try {
    resTopicsNotice = new ResTopicsNotice({
       
          ResTopicNoticeHeader,
          ResTopicNoticeLineOne,
          ResTopicNoticeLineTwo,
          ResTopicNoticeLineThree,
          ResTopicNoticeDueDate,
        
    });
    await resTopicsNotice.save();
  } catch (err) {
    console.log(err);
  }

  if (!resTopicsNotice) {
    return res.status(500).json({ message: "Unable submit Notice" });
  }
  return res.status(201).json({ resTopicsNotice });
};

const updateResTopicsNotice = async (req, res, next) => {
  const id = req.params.id;
  const { ResTopicNoticeHeader, ResTopicNoticeLineOne, ResTopicNoticeLineTwo, ResTopicNoticeLineThree, ResTopicNoticeDueDate } = req.body;
  let resTopicsNotice ;
  try {
    resTopicsNotice  = await ResTopicsNotice.findByIdAndUpdate(id, {
        ResTopicNoticeHeader,
        ResTopicNoticeLineOne,
        ResTopicNoticeLineTwo,
        ResTopicNoticeLineThree,
        ResTopicNoticeDueDate,
    });
    resTopicsNotice = await resTopicsNotice.save();
  } catch (err) {
    console.log(err);
  }
  if (!resTopicsNotice) {
    return res.status(404).json({ message: "Unable To Update Notice" });
  }
  return res.status(200).json({ resTopicsNotice });
};

const deleteResTopicsNotice = async (req, res, next) => {
  const id = req.params.id;
  let resTopicsNotice;
  try {
    resTopicsNotice = await ResTopicsNotice.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!resTopicsNotice) {
    return res.status(404).json({ message: "Unable To Delete Notice" });
  }
  return res.status(200).json({ message: "Notice Successfully Deleted" });
};

exports.getAllResTopicsNotice = getAllResTopicsNotice;
exports.getResTopicsNoticeById = getResTopicsNoticeById;
exports.addResTopicsNotice = addResTopicsNotice;
exports.updateResTopicsNotice = updateResTopicsNotice;
exports.deleteResTopicsNotice = deleteResTopicsNotice;
