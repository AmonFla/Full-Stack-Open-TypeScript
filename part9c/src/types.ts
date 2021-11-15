export interface Diagnose{
    code: string;
    name: string;
    latin?: string;

}

export enum Gender {
    other = 'other',
    male = 'male',
    female = 'female'
}
export interface Patient{
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string,
    gender: Gender;
    occupation: string;
}

export type NoExtraPatientInfo = Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, 'id'>;