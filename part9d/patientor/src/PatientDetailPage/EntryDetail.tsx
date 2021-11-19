import React from "react";
import {Entry} from "../types"; 


import HospitalEntryComponent from "./HospitalEntry";
import HealthCheckEntryComponent from "./HealthCheckEntry";
import OccupationalHealthcareEntryComponent from "./OccupationalHealthcareEntry";   

const EntryDetail: React.FC<{entry: Entry}> = ({entry}) => {
        
    switch(entry.type){
        case "Hospital":
            return <HospitalEntryComponent entry={entry}/>;
        case "HealthCheck":
            return <HealthCheckEntryComponent entry={entry}/>;
        case "OccupationalHealthcare":
            return <OccupationalHealthcareEntryComponent entry={entry}/>;  
    }
};

export default EntryDetail;