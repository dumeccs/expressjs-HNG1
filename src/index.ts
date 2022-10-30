import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ "slackUsername": "Pauli", "backend": true, "age": 26, "bio": "I am a backend dev and I want to be awesome at it" });
});

app.use("/countries", countryRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
