import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";

const app = express();
const port = process.env.PORT || 3333;


app.use(express.json());


app.get('/', (req, res) =>{
    try{
        res.status(200).json({
            "slackUsername":"Pauli",
            "backend": true,
            "age": 26,
            "bio": "I am backend dev, and I am awesome at it."
        })
    }catch(error){
        res.status(500).json(error)
    }
})


app.listen(port, () => {
  console.log(`Server running on:${port}`);
});
