import { Router } from "express";
import { CountryModel, ICountry } from "../models/country";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const countries: ICountry[] = await CountryModel.find().exec();
    return res.json(countries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post('/', (req,res) => {
  
    try{
    let result = 0
    switch(req.body.operation_type){
        case "addition":
        result = req.body.x + req.body.y 
        break;
        case "subtraction":
        result = req.body.x - req.body.y 
        break;
        case "multiplication":
        result = req.body.x * req.body.y 
        break;
        default: 
        result = 0
    }
    res.status(200).json({
        "slackUsername":"Pauli",
        "result": result,
        "operation_type": req.body.operation_type
    })
}catch(error){
    res.status(500).json(error)
}
});

export default routes;
