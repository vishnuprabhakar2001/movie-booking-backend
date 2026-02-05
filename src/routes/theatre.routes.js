import express from "express";
import {
  createTheatre,
  getAllTheatres,
  getTheatreById,
} from "../controllers/theatre.controller.js";

const router = express.Router();

router.post("/", createTheatre);
router.get("/", getAllTheatres);
router.get("/:id", getTheatreById);

export default router;
