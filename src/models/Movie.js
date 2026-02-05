import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number, // duration in minutes
      required: true,
    },
    genre: {
      type: [String],
    },
    language: {
      type: String,
      default: "English",
    },
    releaseDate: {
      type: Date,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
