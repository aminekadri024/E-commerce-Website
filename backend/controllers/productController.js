const addProduct = async (req, res) => {
    try {
        const {name, description, price, category, subCategory, size, bestseller} = req.body;
        
        const image1 = req.file.image1[0];
        const image2 = req.file.image2[0];
        const image3 = req.file.image3[0];
        const image4 = req.file.image4[0];

        console.log(image1, image2, image3, image4);
        console.log(name, description, price, category, subCategory, size, bestseller);
        
        
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
        
    }
};

const listProducts = async (req, res) => {};

const removeProduct = async (req, res) => {};

const singleProduct = async (req, res) => {};

export { addProduct, listProducts, removeProduct, singleProduct };
