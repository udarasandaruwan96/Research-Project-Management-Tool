const panel = require("../model/sug_panel");

const getAllPanels = async (req, res, next) => {
    let panels;

    try{
        panels=await panel.find();
    }catch{
        console.log(err)
    }

if(!panels){
    return res.status(404).json({massage:"No product found"});
}
return res.status(200).json({panels})
};

const addpanel = async (req, res, next) => {
    const { panelID,panelmember1,panelmember2,panelmember3,panelmember4 } = req.body;
    let panels;
    try {
      panels = new panel({
        panelID,
        panelmember1,
        panelmember2,
        panelmember3,
        panelmember4 
      });
      await panels.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!panels) {
      return res.status(500).json({ message: "Unable To Add" });
    }

    return res.status(201).json({ panels });
  };
  const updatepanel = async (req, res, next) => {
    const id = req.params.id;
    const { panelID,panelmember1,panelmember2,panelmember3,panelmember4  } = req.body;
    let panels;
    try {
        panels = await panel.findByIdAndUpdate(id, {
            panelID,
            panelmember1,
            panelmember2,
            panelmember3,
            panelmember4 
      });
      panels = await panels.save();
    } catch (err) {
      console.log(err);
    }
    if (!panels) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ panels });
  };

  const deletepanel= async (req, res, next) => {
    const id = req.params.id;
    let panels;
    try {
        panels = await panel.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!panels) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
  
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let panels;
    try {
        panels= await panel.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!panels) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ panels });
  };




exports.getAllPanels = getAllPanels;
exports.addpanel=addpanel;
exports.updatepanel=updatepanel;
exports.deletepanel=deletepanel;
exports.getById = getById;