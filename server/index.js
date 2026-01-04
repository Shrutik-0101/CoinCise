// import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import chatRoutes from "./routes/chat.js";
import chartRoutes from "./routes/charts.js";
import imageRoutes from "./routes/images.js";
const app = express();
app.use(express.json());
app.use(express.static("public")); 
app.use("/chat", chatRoutes);
app.use("/charts", chartRoutes);
app.use("/images", imageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CoinCise server running on port ${PORT}`);
});
