import express from "express";
import { calculateBmi } from "./bmiCalculator";

const app = express();


app.get('/bmi', (req,res)=>{
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);
    if(isNaN(weight) || isNaN(height)){
        return res.json({error:"malformatted parameters"});
    }
    return res.json({weight, height, bmi: calculateBmi(height, weight)});
    
});


const PORT = 3002;
app.listen(PORT,()=>{
    console.log(`server at ${PORT}`);
})