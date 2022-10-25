const group = require("../model/th_group_model");

const getAllGroups = async (req, res, next) => {
    let Groups;

    try{
        Groups=await group.find();
    }catch{
        console.log(err)
    }

if(!Groups){
    return res.status(404).json({massage:"No product found"});
}
return res.status(200).json({Groups})
};

const addGroup = async (req, res, next) => {
    const { Grp_Leader,Grp_member2,Grp_member3,Grp_member4,Grp_ID,Panel,Finalmarks} = req.body;
    let Groups;
    try {
        Groups = new group({
        Grp_Leader,
        Grp_member2,
        Grp_member3,
        Grp_member4,
        Grp_ID,
        Panel,
        Finalmarks 
      });
      await Groups.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!Groups) {
      return res.status(500).json({ message: "Unable To Add" });
    }

    return res.status(201).json({ Groups });
  };
  const updateGroup = async (req, res, next) => {
    const id = req.params.id;
    const {Grp_Leader,Grp_member2,Grp_member3,Grp_member4,Grp_ID,Panel,Finalmarks} = req.body;
    let Groups;
    try {
        Groups = await group.findByIdAndUpdate(id, {
            Grp_Leader,
            Grp_member2,
            Grp_member3,
            Grp_member4,
            Grp_ID,
            Panel,
            Finalmarks
      });
      Groups = await Groups.save();
    } catch (err) {
      console.log(err);
    }
    if (!Groups) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({Groups});
  };

  const deleteGroup= async (req, res, next) => {
    const id = req.params.id;
    let Groups;
    try {
        Groups= await group.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!Groups) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
  
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let Groups;
    try {
        Groups = await group.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (! Groups) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ Groups});
  };




exports.getAllGroups = getAllGroups
exports.addGroup = addGroup ;
exports. updateGroup = updateGroup ;
exports.deleteGroup=deleteGroup;
exports.getById = getById;