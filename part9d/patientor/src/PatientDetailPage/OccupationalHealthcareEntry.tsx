import React from "react"; 
import { Icon, Segment } from "semantic-ui-react";
import { Diagnosis, OccupationalHealthcareEntry } from "../types"; 

interface Props {
    entry: OccupationalHealthcareEntry; 
    diagnosis: { [code:string]: Diagnosis};
}

const OccupationalHealthcareEntryComponent: React.FC<Props> = ({entry, diagnosis}) => {  
    console.log(diagnosis);

    const getDiagnosis= (code: string):string => {
        const data : Diagnosis = diagnosis[code];
        return data.code+' - '+data.name;
    };  
   
    return(
        <Segment>
            
             <h4>{entry.date} <Icon name="stethoscope" size="large"/> {entry.employerName}</h4>
             <p>{entry.description}<br />
             Specialist: {entry.specialist}<br /> 
             {(entry.sickLeave !== undefined)?
                <>SickLeave: ({entry.sickLeave?.endDate}-{entry.sickLeave?.endDate})</>
             :null}

            </p> 
            {(entry.diagnosisCodes !== undefined)?
                <><h4>Diagnosis</h4>
                <ul>
                    {entry.diagnosisCodes?.map(d => <li key={d}>{getDiagnosis(d)}</li>)}    
                </ul></>
            :<></>}
           
        </Segment>
    );
};

export default OccupationalHealthcareEntryComponent;