import data from '../../data/patients';
import { NoExtraPatientInfo, Patient, NewPatient } from '../types';
import { v4 as uuid } from 'uuid';

const getPatients = (): NoExtraPatientInfo[] => {
    return data.map(
            ({id,name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender, 
        occupation
        })
    );
    
};

const addPatient = (body: NewPatient) : Patient =>{
    const newPatient: Patient = {
        id: uuid(),
        ...body
    };

    data.push(newPatient);
    return newPatient;
};

export default {
    getPatients,
    addPatient
};