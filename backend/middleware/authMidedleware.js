import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try {
      console.log("token Found")
      token = req.headers.authorization.split(" ")[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(`decoded token ${decoded}`)

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch(error) {
      console.error(`Error: ${error}`)
      res.status(401)
      throw new Error("Not authorized, token failed")
    }
  }
  if(!token) {
    res.status(401)
    throw new Error("Not authorized, no token found")
  }
} )

const adminOnly = (req, res, next) => {
  if(req.user && req.user.isAdmin){
    next()
  }else{
    res.status(401)
    throw new Error("You are not authorized to access this data") 
  }
}

const merchantsOnly = (req, res, next) => {
  if (req.user && req.user.userType==="merchant") {
    next();
  } else {
    res.status(401);
    throw new Error("You are not authorized to access this data, only merchants");
  }
};

export {adminOnly, merchantsOnly, protect}
