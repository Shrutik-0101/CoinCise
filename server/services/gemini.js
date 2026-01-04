import dotenv from "dotenv";
dotenv.config(); // 👈 MUST BE HERE

import { GoogleGenAI } from "@google/genai";

console.log("GEMINI_API_KEY loaded in gemini.js:", !!process.env.GEMINI_API_KEY);

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
