import express from "express";
import cityRoutes from "./routes/city.routes.js";
import errorHandler from "./utils/ErrorHandler.js";
import movieRoutes from "./routes/movie.routes.js";
import theatreRoutes from "./routes/theatre.routes.js";

const app = express();

app.use(express.json());

app.use("/api/cities", cityRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/theatres", theatreRoutes);

// ❗ MUST be last
app.use(errorHandler);

export default app;
