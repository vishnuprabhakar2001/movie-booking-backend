import Movie from "../models/Movie.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// Create Movie
export const createMovie = asyncHandler(async (req, res) => {
  const { title, duration, description, genre, language, releaseDate } =
    req.body;

  if (!title || !duration) {
    throw new ApiError("Title and duration are required");
  }

  const movieExists = await Movie.findOne({ title });
  if (movieExists) {
    throw new ApiError("Movie already exists");
  }

  const movie = await Movie.create({
    title,
    duration,
    description,
    genre,
    language,
    releaseDate,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, movie, "Movie created successfully"));
});

// Get All Movies
export const getAllMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find();

  return res
    .status(200)
    .json(new ApiResponse(200, movies, "Movies fetched successfully"));
});

// Get Single Movie
export const getMovieById = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    throw new ApiError("Movie not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, movie, "Movie fetched successfully"));
});
