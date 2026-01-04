import express from "express";
import { ai } from "../services/gemini.js";
import { FINANCE_SYSTEM_PROMPT } from "../utils/prompts.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { question } = req.body;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${FINANCE_SYSTEM_PROMPT}\n\nUser question:\n${question}`,
    });

    const answer = result.text;

    console.log("Gemini answer:", answer);

    res.json({ answer });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
