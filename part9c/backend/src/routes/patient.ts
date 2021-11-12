import { Router } from "express";
import  patientService from '../services/patient';

const router = Router();

router.get('/',(_req,res)=>{
    res.send(patientService.getPatients());
});

export default router;