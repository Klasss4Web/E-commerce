import express from "express";
import asyncHandler from "express-async-handler";
import { adminOnly, protect } from "../middleware/authMidedleware.js";
import Categories from "../models/categoriesModel.js";
import Products from "../models/productModel.js";

const categoriesRoute = express.Router();


//GET ALL CATEGORIES: ADMIN ONLY
categoriesRoute.get(
  "/",
  protect,
  // adminOnly,
  asyncHandler(async (req, res) => {
    const categories = await Categories.find({})
      .sort({ _id: -1 })
      .populate("addedBy", "id name email");
    if(categories) {
      res.json({
        status: 200,
        message: "Categories Successfully fetched",
        data: categories,
      });
    } else {
      res.status(404).json("No category found")
    }
  })
);

//GET CATEGORY BY ID: ADMIN ONLY
categoriesRoute.get(
  "/:id",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const category = await Categories.findById(req.params.id);
    if(category) {
      res.json({
        status: 200,
        message: "Categories Successfully fetched",
        data: category,
      });
    } else {
      res.status(404).json("No category found")
    }
  })
);


//ADD CATEGORIES: ONLY ADMIN
categoriesRoute.post(
  "/add-categories",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const { name, image, description } = req.body;
    const categoryExist = await Categories.findOne({ name });

    if (categoryExist) {
      res.status(400);
      throw new Error("Category name alread exist");
    } else {
      const category = new Categories({
        name,
        description,
        image,
        addedBy: req.user,
      });
      if (category) {
        const createdCategory = await category.save();
        res.json({
          status: 200,
          message: "Categories Successfully created",
          data: createdCategory,
        });
      } else {
        res.status(400);
        throw new Error("Invalid category data");
      }
    }
  })
);

//EDIT CATEGORY: ONLY ADMIN
categoriesRoute.put(
  "/:id",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const { name, addedBy, description, image } = req.body;
    const category = await Categories.findById(req.params.id);

    if (category) {
      category.name = name || category.name;
      category.description = description || category.description;
      category.image = image || category.image;
      category.addedBy = addedBy || category.addedBy;

      const updatedCategory = await category.save();
        res.json({
          status: 200,
          message: "Categories Successfully Updated",
          data: updatedCategory,
        });
    } else {
      res.status(404);
      throw new Error("Category not found");
    }
  })
);

//DELETE CATEGORY: ADMIN ONLY
categoriesRoute.delete(
  "/:id",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const category = await Categories.findById(req.params.id);
    if (category) {
      await category.remove();
      res.json({ message: "Category deleted successfully" });
    } else {
      res.status(404);
      throw new Error("Category Not Found");
    }
  })
);


export default categoriesRoute;
