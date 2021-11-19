import React from "react";
import { Diagnosis, Entry } from "../types";

import HospitalEntryComponent from "./HospitalEntry";
import HealthCheckEntryComponent from "./HealthCheckEntry";
import OccupationalHealthcareEntryComponent from "./OccupationalHealthcareEntry"; 

const EntryDetail: React.FC<{entry: Entry, diagnosis: {[code:string]:Diagnosis}}> = ({entry, diagnosis}) => {
    switch(entry.type){
        case "Hospital":
            return <HospitalEntryComponent entry={entry} diagnosis={diagnosis}/>;
        case "HealthCheck":
            return <HealthCheckEntryComponent entry={entry} diagnosis={diagnosis}/>;
        case "OccupationalHealthcare":
            return <OccupationalHealthcareEntryComponent entry={entry} diagnosis={diagnosis}/>; 
    }
};

export default EntryDetail;