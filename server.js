import express from "express";
import cors from "cors";
const PORT = 8080;

const app = express();
app.use(cors());
const username = "karmakandhway";
const password = "karmaKandhway002";
console.log(username, password);
app.get("/deals", async function (req, res) {
  try {
    const body = {
      source: "amazon_search",
      domain: "in",
      query: "deals of the day",
      pages: 1,
      parse: true,
    };
    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      },
    });
    const data = await response.json();
    const results = data.results[0].content.results.organic;
    const filterDeals = results.filter((deal) => deal.price_strikethrough);
    const sortedByBestDeal = filterDeals.sort(
      (a, b) =>
        ((a.price_strikethrough - a.price) / a.price_strikethrough) * 100 -
        ((b.price_strikethrough - b.price) / b.price_strikethrough) * 100
    );

    res.send(sortedByBestDeal);
  } catch (error) {
    console.error(error.message);
  }
});
app.listen(PORT, () => console.log(`Connected to ${PORT}`));
