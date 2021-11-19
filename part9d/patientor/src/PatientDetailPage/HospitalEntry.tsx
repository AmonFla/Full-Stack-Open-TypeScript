import React from "react"; 
import { Segment, Icon } from "semantic-ui-react";
import { HospitalEntry } from "../types"; 
import DiagnosisList from "./DiagnososList";

const HospitalEntryComponent: React.FC<{entry: HospitalEntry}> = ({entry}) => {  
  
    return(
        <Segment>
            <h4>{entry.date} <Icon name="user md" size="large"/></h4>
             <p>{entry.description}<br />
             Specialist: {entry.specialist}<br />
             Discharge: {entry.discharge.date} - {entry.discharge.criteria}

            </p> 
            {entry.diagnosisCodes && (
                <DiagnosisList diagnosesCodes={entry.diagnosisCodes} />
            )}
           
        </Segment>
    );
};

export default HospitalEntryComponent;