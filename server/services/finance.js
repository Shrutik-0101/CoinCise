import axios from "axios";

export async function getCryptoPrices(coinId, days) {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`;

  const { data } = await axios.get(url, {
    params: {
      vs_currency: "usd",
      days,
    },
  });

  return data.prices.map(([timestamp, price]) => ({
    time: new Date(timestamp).toISOString(),
    price,
  }));
}
