import { v2 as cloudinary } from "cloudinary";


const addProduct = async (req, res) => {
    try {
        const {name, description, price, category, subCategory, size, bestseller} = req.body;
        
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined);

        let imageUrls = await Promise.all(
            images.map(async (item) => {
                const imageUrl = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
                return imageUrl.secure_url;
            })
        );
        console.log(imageUrls);
        console.log(name, description, price, category, subCategory, size, bestseller);
        
        
        res.json({})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const listProducts = async (req, res) => {};

const removeProduct = async (req, res) => {};

const singleProduct = async (req, res) => {};

export { addProduct, listProducts, removeProduct, singleProduct };
