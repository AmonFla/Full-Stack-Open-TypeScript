import { Router } from "express";
import  patientService from '../services/patient';
import { bodyToNewPatient, bodyToNewEntry } from "../utils/validation";

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

router.post('/:id/entries',(req,res)=>{
    try{
        const id: string = req.params.id; 
        const newEntry = bodyToNewEntry(req.body);
        const addedEntryToPatient = patientService.addPatientEntry(id, newEntry);
        res.json(addedEntryToPatient);
    }catch(e: any){
        res.status(400).send(e.message);
    } 
});

export default router;