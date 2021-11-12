import data from '../../data/diagnoses.json';
import { Diagnose } from '../types';

const getDiagnoses = (): Array<Diagnose> => {
    return data;
};

export default {
    getDiagnoses
};