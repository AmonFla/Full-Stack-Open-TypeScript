/* eslint-disable @typescript-eslint/no-explicit-any */

import { Gender, NewPatient } from "../types";

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


const validateString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const validateDate = (date: string ): boolean => {
    return Boolean(Date.parse(date));
};

const validateGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
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