const { profile } = require("../../DataBase/db");
const url = require("../Utils/imageUploader");
const cloudinary = require("../Utils/cloudinary");

const patchProfile = async (req,res) => {
  let {
    id,
    name,
    mail,
    username,
    phone,
    storeName,
    banner,
    profilePicture,
    location,
  } = req.body;
  console.log("BODY ==> ", req.body);

  try {
    //profilePicture = await url(req.files["profilePicture"][0].path);
    const profileAvatar = await cloudinary.uploader.upload(profilePicture,
      { 
        upload_preset:'yvjjtrzu',
        public_id:`algo`,
        allowed_formats:['png','jpg','jpeg'],
       }, 
      function(error, result) {
        if(error){
          console.log(error);
        }
        console.log(result);
    });  
    console.log(profileAvatar);  
    //banner = await url(req.files["banner"][0].path); 
    const user = await profile.findByPk(id);
    console.log(user);
    user.name = name ? name : user.name;
    user.mail = mail ? mail : user.mail;
    user.username = username ? username : user.username;
    user.phone = phone ? phone : user.phone;
    user.storeName = storeName ? storeName : user.storeName;
    user.phone = phone ? phone : user.phone;
    user.location = location ? location : user.location;

    user.profilePicture =
    typeof profileAvatar.url === "string" ? profileAvatar.url : user.profilePicture;
    user.banner = typeof banner === "string" ? banner : user.banner;
    await user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
};

module.exports = patchProfile;
