const ResTopics = require("../model/shv_res_topic_model");

const getAllResTopics = async (req, res, next) => {
  let resTopics;
  try {
    resTopics = await ResTopics.find();
  } catch (err) {
    console.log(err);
  }

  if (!resTopics) {
    return res.status(404).json({ message: "Not Research topics found" });
  }
  return res.status(200).json({ resTopics });
};

const getResTopicsById = async (req, res, next) => {
  const id = req.params.id;
  let resTopics;
  try {
    resTopics = await ResTopics.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!resTopics) {
    return res.status(404).json({ message: "No Research topics found" });
  }
  return res.status(200).json({ resTopics });
};

const addResTopics = async (req, res, next) => {
  const { ResTopicgroupId, ResTopicsupervisor, ResTopicresearchArea, ResTopicResearchTopic, ResTopicdateEntered } = req.body;
  let resTopics;
  try {
    resTopics = new ResTopics({
      ResTopicgroupId,
      ResTopicsupervisor,
      ResTopicresearchArea,
      ResTopicResearchTopic,
      ResTopicdateEntered,
    });
    await resTopics.save();
  } catch (err) {
    console.log(err);
  }

  if (!resTopics) {
    return res.status(500).json({ message: "Unable submit your research topic" });
  }
  return res.status(201).json({ resTopics });
};

const updateResTopics = async (req, res, next) => {
  const id = req.params.id;
  const { ResTopicgroupId, ResTopicsupervisor, ResTopicresearchArea, ResTopicResearchTopic, ResTopicdateEntered } = req.body;
  let resTopics;
  try {
    resTopics = await ResTopics.findByIdAndUpdate(id, {
      ResTopicgroupId,
      ResTopicsupervisor,
      ResTopicresearchArea,
      ResTopicResearchTopic,
      ResTopicdateEntered,
    });
    resTopics = await resTopics.save();
  } catch (err) {
    console.log(err);
  }
  if (!resTopics) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ resTopics });
};

const deleteResTopics = async (req, res, next) => {
  const id = req.params.id;
  let resTopics;
  try {
    resTopics = await ResTopics.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!resTopics) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Research topic Successfully Deleted" });
};

exports.getAllResTopics = getAllResTopics;
exports.getResTopicsById = getResTopicsById;
exports.addResTopics = addResTopics;
exports.updateResTopics = updateResTopics;
exports.deleteResTopics = deleteResTopics;
