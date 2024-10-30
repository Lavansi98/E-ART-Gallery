import express from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
  updateData,
} from "../controllers/product Controllers.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.get("/list", listProducts);
productRouter.put("/update/:id", updateData);

productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "imag21", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/single", singleProduct);

export default productRouter;
