import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

// database connect
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// product route
app.use("/api/products", productRoutes);

// error middleware
app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port --> ${PORT}`.yellow.bold
  );
});
