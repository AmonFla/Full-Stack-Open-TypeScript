import data from '../../data/patients.json';
import { NoExtraPatientInfo } from '../types';

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

export default {
    getPatients
};