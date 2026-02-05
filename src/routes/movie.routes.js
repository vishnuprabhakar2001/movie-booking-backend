import express from "express";
import {
  createMovie,
  getAllMovies,
  getMovieById,
} from "../controllers/movie.controller.js";

const router = express.Router();

router.post("/", createMovie);
router.get("/", getAllMovies);
router.get("/:id", getMovieById);

export default router;
