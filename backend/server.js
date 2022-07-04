import express from "express";
import products from "./data/product.js";
import dotenv from "dotenv";
import connectToDataBase from "./config/mongodb.js";
import importData from "./dataImport.js";
import productRoute from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errors.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
connectToDataBase();
const app = express();
app.use(express.json())

// API
app.use("/api/import", importData);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

//ERROR HANDLER
app.use(notFound);
app.use(errorHandler)

// //GET PRODUCTS
// app.get("/api/products", (req, res) => {
//   res.json(products)
// });

// //GET SINGLE PRODUCT
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find(product => product._id === req.params.id) 
//   res.json(product)
// });

app.get("/", (req, res) => {
  res.send("API is running...")
});

const PORT = process.env.PORT || 1000

app.listen(PORT, console.log(`Server running in port ${PORT}`))