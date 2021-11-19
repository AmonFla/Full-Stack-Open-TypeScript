import React from "react"; 
import { Segment, Icon } from "semantic-ui-react";
import { Diagnosis, HealthCheckEntry,HealthCheckRatingColors } from "../types"; 

interface Props {
    entry: HealthCheckEntry; 
    diagnosis: { [code:string]: Diagnosis};
}

const HealthCheckEntryComponent: React.FC<Props> = ({entry, diagnosis}) => {  
    console.log(diagnosis);

    const getDiagnosis= (code: string):string => {
        const data : Diagnosis = diagnosis[code];
        return data.code+' - '+data.name;
    };  
   
    return(
        <Segment>
            <h4>{entry.date} <Icon name="user md" size="large"/></h4>
             <p>{entry.description}<br />
             Specialist: {entry.specialist}<br />
             <Icon name="heart" style= {{color: HealthCheckRatingColors[entry.healthCheckRating]}} />

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

export default HealthCheckEntryComponent;