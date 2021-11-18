import React from "react"; 
import { Diagnosis, Entry } from "../types"; 

interface Props {
    entry: Entry; 
    diagnosis: { [code:string]: Diagnosis};
}

const EntryDetail: React.FC<Props> = ({entry, diagnosis}) => {  
    console.log(diagnosis);

    const getDiagnosis= (code: string):string => {
        const data : Diagnosis = diagnosis[code];
        return data.code+' - '+data.name;
    }; 
   
    return(
        <>
            <p>{entry.date} {entry.description}</p> 
            <ul>
                {entry.diagnosisCodes?.map(d => <li key={d}>{getDiagnosis(d)}</li>)}    
            </ul>
           
        </>
    );
};

export default EntryDetail;