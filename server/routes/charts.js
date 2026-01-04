import express from "express";
import { getCryptoPrices } from "../services/finance.js";

const router = express.Router();

router.get("/crypto", async (req, res) => {
  try {
    const { coin = "bitcoin", days = 30 } = req.query;

    const prices = await getCryptoPrices(coin, days);

    res.json({
      coin,
      days,
      prices,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
