import dataController from "../controllers/controller.js";
import express from "express";

const router = express.Router();
router.get("/data", dataController.getAllData);

export default router;