import data from '../../data/diagnoses.json';
import { Diagnosis } from '../types';

const getDiagnoses = (): Array<Diagnosis> => {
    return data;
};

export default {
    getDiagnoses
};