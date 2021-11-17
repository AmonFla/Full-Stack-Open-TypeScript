// eslint-disable-next-line @typescript-eslint/no-empty-interface

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

export interface Entry{

}

export interface Patient{
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string,
    gender: Gender;
    occupation: string;
    entries: Entry[];
}

export type NoExtraPatientInfo = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatient = Omit<Patient, 'id' | 'entries'>;