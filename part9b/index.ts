/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();
app.use(express.json());


app.get('/bmi', (req,res)=>{
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);
    if(isNaN(weight) || isNaN(height)){
        return res.json({error:"malformatted parameters"});
    }
    return res.json({weight, height, bmi: calculateBmi(height, weight)});
    
});
 

app.post('/webexercises', (req,res)=>{  

    const daily_exercises: Array<number> = req.body.daily_exercises;
    const target  = req.body.target;    

    if(daily_exercises === undefined || target === undefined){
        return res.json({error:"parameters missing"});
    }

    const data: Array<number> = daily_exercises.map(h=>Number(h));

    if(isNaN(Number(target)) || data.includes(NaN)){
        return res.json({error:"malformatted parameters"});
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return res.json(calculateExercises(Number(target),daily_exercises));
    
});

const PORT = 3002;
app.listen(PORT,()=>{
    console.log(`server at ${PORT}`);
});