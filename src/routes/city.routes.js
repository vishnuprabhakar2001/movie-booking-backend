import express from "express";
import { createCity, getAllCities } from "../controllers/city.controller.js";

const router = express.Router();

router.post("/", createCity);
router.get("/", getAllCities);

export default router;
