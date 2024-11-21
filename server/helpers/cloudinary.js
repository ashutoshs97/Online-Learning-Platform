const cloudinary = require("cloudinary").v2;

//configure with env data
cloudinary.config({
  cloud_name: "dc8osvkhu",
  api_key: "591146346179429",
  api_secret: "Fwj5AsGw4FoVMMZWS7Y9c2Owu5k",
});

const uploadMediaToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Error uploading to cloudinary");
  }
};

const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete assest from cloudinary");
  }
};

module.exports = { uploadMediaToCloudinary, deleteMediaFromCloudinary };
