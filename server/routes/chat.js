import express from "express";
// import { get_percentage } from "../controllers/predict.js";

const router = express.Router();

router.post("/lifely",get_percentage);

export default router;