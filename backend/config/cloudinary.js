import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    cloud_secret: process.env.CLOUDINARY_SECRET_KEY,
    cloud_key: process.env.CLOUDINARY_API_KEY,
  });
};

export default connectCloudinary;
