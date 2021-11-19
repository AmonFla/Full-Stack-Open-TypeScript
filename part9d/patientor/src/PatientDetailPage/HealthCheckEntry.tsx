import React from "react"; 
import { Segment, Icon } from "semantic-ui-react";
import {  HealthCheckEntry,HealthCheckRatingColors } from "../types"; 
import DiagnosisList from "./DiagnososList";


const HealthCheckEntryComponent: React.FC<{entry: HealthCheckEntry}> = ({entry}) => {  
 
    return(
        <Segment>
            <h4>{entry.date} <Icon name="user md" size="large"/></h4>
             <p>{entry.description}<br />
             Specialist: {entry.specialist}<br />
             <Icon name="heart" style= {{color: HealthCheckRatingColors[entry.healthCheckRating]}} />

            </p> 
            {entry.diagnosisCodes && (
                <DiagnosisList diagnosesCodes={entry.diagnosisCodes} />
            )}
           
        </Segment>
    );
};

export default HealthCheckEntryComponent;