import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";

const app = express();
const cors = require('cors');
const port = process.env.PORT || 3333;


app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));
app.use(cors())


app.use("/", countryRoutes);

app.listen(port, () => {
  console.log(`Server running on:${port}`);
});
