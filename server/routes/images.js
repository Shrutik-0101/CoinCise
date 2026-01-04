import express from "express";
import { ai } from "../services/gemini.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const image = await ai.models.generateImages({
      model: "imagen-3.0-generate-002",
      prompt,
    });

    res.json({
      imageBase64: image.generatedImages[0].image.imageBytes,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
