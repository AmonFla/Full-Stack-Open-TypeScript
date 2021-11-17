import { Router } from "express";
import  patientService from '../services/patient';
import { bodyToNewPatient } from "../utils/validation";

const router = Router();

router.get('/',(_req,res)=>{
    res.send(patientService.getPatients());
});

router.post('/',(req,res)=>{
    try{
        const newPatient = bodyToNewPatient(req.body);
        const addedPatient = patientService.addPatient(newPatient);
        res.json(addedPatient);
    }catch(e: any){
        res.status(400).send(e.message);
    }
     
});

router.get('/:id',(req,res)=>{
    const id: string = req.params.id; 
    res.send(patientService.getPatientById(id));
});


export default router;