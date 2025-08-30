import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, message: "unauthorized token access" });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token_decode);
    console.log(process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "unauthorized login access" });
    }
    next();
    
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "unauthorized access" });
  }
};

export default adminAuth;
