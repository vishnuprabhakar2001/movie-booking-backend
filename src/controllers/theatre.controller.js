import Theatre from "../models/Theatre.js";
import City from "../models/City.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// Create Theatre
export const createTheatre = asyncHandler(async (req, res) => {
  const { name, cityId, address, totalSeats } = req.body;

  if (!name || !cityId || !address) {
    throw new ApiError("Name, city, and address are required");
  }

  // Check if City exists
  const city = await City.findById(cityId);
  if (!city) {
    throw new ApiError("City not found");
  }

  // Check if theatre already exists in the same city
  const theatreExists = await Theatre.findOne({ name, city: cityId });
  if (theatreExists) {
    throw new ApiError("Theatre already exists in this city");
  }

  const theatre = await Theatre.create({
    name,
    city: cityId,
    address,
    totalSeats,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, theatre, "Theatre created successfully"));
});

// Get All Theatres
export const getAllTheatres = asyncHandler(async (req, res) => {
  const theatres = await Theatre.find().populate("city", "name"); // Here in populate, city has id as a referenc and populate will get all the fields along with id of the docments in place of just id the city's id belongs to for the second string where we can enter multiple value as per our requirements of the documents e.g.:- "name ..... ....."

  return res
    .status(200)
    .json(new ApiResponse(200, theatres, "Theatres fetched successfully"));
});

// Get Single Theatre
export const getTheatreById = asyncHandler(async (req, res) => {
  const theatre = await Theatre.findById(req.params.id).populate(
    "city",
    "name"
  );

  if (!theatre) {
    throw new ApiError("Theatre not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, theatre, "Theatre fetched successfully"));
});
