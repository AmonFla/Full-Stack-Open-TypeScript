/* eslint-disable @typescript-eslint/no-explicit-any */

import { Gender, NewPatient, NewEntry, Discharge, NewBaseEntry, HealthCheckRating } from "../types";

export const bodyToNewPatient = (body: any) :NewPatient =>{
    const newPatient: NewPatient = {
        name: parseGenericString('name', body.name),
        dateOfBirth: parseGenericDate('dateOfBirth', body.dateOfBirth),
        ssn: parseGenericString('ssn', body.ssn),
        occupation: parseGenericString('occupation', body.occupation),
        gender: parseGender(body.gender)
    };

    return newPatient;

} ;

export const bodyToNewEntry = (body: any) :NewEntry  =>{
    const NewBaseEntry: NewBaseEntry = { 
        description: parseGenericString('description',body.description),
        date: parseGenericDate('date', body.date),
        specialist: parseGenericString('specialist',body.specialist),
        diagnosisCodes: body.diagnosisCodes,
    };
     
    let tempEntry : any = {type: body.type};

    switch(body.type){
        case "HealthCheck": 
            tempEntry.healthCheckRating = parseHealthCheckRating(body.healthCheckRating); 
            break;
        case "Hospital": 
            tempEntry.discharge = < Discharge>{
                date : parseGenericDate('discharge.date', body.discharge.date),
                criteria : parseGenericString('discharge.criteria', body.discharge.criteria),
            }
            break;
        case "OccupationalHealthcare": 
            tempEntry.sickLeave=  body.sickLeave;
            tempEntry.employerName = parseGenericString('employerName', body.employerName);
            break;
    } 
    return <NewEntry>{...NewBaseEntry,...tempEntry};

} ;

const validateString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const validateDate = (date: string ): boolean => {
    return Boolean(Date.parse(date));
};

const validateGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};

const validateHealthCheckRating = (param: any): param is HealthCheckRating => { 
    return Object.values(HealthCheckRating).includes(Number(param));
};


const parseGenericString = (field: string, texto: any): string => { 
    if( !texto || !validateString(texto)){
        throw new Error(`Incorrect or missing  ${field}: ${texto}` );
    }
    return texto;
};

const parseGenericDate = (field: string, date: any): string =>{
    if(!date || !validateString(date) || !validateDate(date)){
        throw new Error(`Incorrect or missing  ${field}: ${date}` );
    }
    return date;
};

const parseGender = (gender: any): Gender => {
    if(!gender || !validateGender(gender)){
        throw new Error(`Incorrect or missing  gender: ${gender}` );
    }
    return gender;
};

const parseHealthCheckRating = (healthCheckRating: any): HealthCheckRating => {
    
    if( !validateHealthCheckRating(healthCheckRating)){
        throw new Error(`Incorrect or missing  healthCheckRating: ${healthCheckRating}` );
    }
    return healthCheckRating;
};