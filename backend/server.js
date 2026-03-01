import express from "express";
import path from "path";
import dotenv from "dotenv";

import productsRoutes from "./routes/productsRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/products", productsRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
}
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port http://localhost:" + PORT);
  });
});
