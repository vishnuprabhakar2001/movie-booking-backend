import City from "../models/City.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// Create City
export const createCity = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new ApiError("City name is required");
  }

  const cityExists = await City.findOne({ name });
  if (cityExists) {
    throw new ApiError("City already exists");
  }

  const city = await City.create({ name });

  return res
    .status(201)
    .json(new ApiResponse(201, city, "City created successfully"));
});

// Get All Cities
export const getAllCities = asyncHandler(async (req, res) => {
  const cities = await City.find();

  return res
    .status(200)
    .json(new ApiResponse(200, cities, "Cities fetched successfully"));
});
