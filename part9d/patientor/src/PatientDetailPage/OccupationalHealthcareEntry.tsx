import React from "react"; 
import { Icon, Segment } from "semantic-ui-react";
import { OccupationalHealthcareEntry } from "../types"; 
import DiagnosisList from "./DiagnososList";
 

const OccupationalHealthcareEntryComponent: React.FC<{entry: OccupationalHealthcareEntry}> = ({entry}) => {  

    return(
        <Segment>
            
             <h4>{entry.date} <Icon name="stethoscope" size="large"/> {entry.employerName}</h4>
             <p>{entry.description}<br />
             Specialist: {entry.specialist}<br /> 
             {(entry.sickLeave !== undefined)?
                <>SickLeave: ({entry.sickLeave?.endDate}-{entry.sickLeave?.endDate})</>
             :null}

            </p> 
            {entry.diagnosisCodes && (
                <DiagnosisList diagnosesCodes={entry.diagnosisCodes} />
            )}
           
        </Segment>
    );
};

export default OccupationalHealthcareEntryComponent;