import dotenv from "dotenv";
import express from "express";
// import cors from 'cors';
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

// database connect
connectDB();

// app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Auth route
app.use("/api/users", userRoutes);
// product route
app.use("/api/products", productRoutes);
// order route
app.use("/api/orders", orderRoutes);
// checkout route
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

// error middleware
app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port --> ${PORT}`.yellow.bold
  );
});
