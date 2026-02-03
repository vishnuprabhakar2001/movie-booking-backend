import express from "express";
import cityRoutes from "./routes/city.routes.js";
import errorHandler from "./utils/ErrorHandler.js";

const app = express();

app.use(express.json());

app.use("/api/cities", cityRoutes);

// ❗ MUST be last
app.use(errorHandler);

export default app;
