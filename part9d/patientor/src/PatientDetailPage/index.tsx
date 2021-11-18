import React, {useEffect, useState} from "react";
import axios from "axios";



import { Patient, GenderIcon} from "../types";
import { apiBaseUrl } from "../constants";
import { useStateValue } from "../state";
import { useParams } from "react-router";
import { Container, Icon, SemanticICONS } from "semantic-ui-react";

const PatientDetailPage: React.FC = () => {
  const [{ lastPatient }, dispatch] = useStateValue();
  const [patient, setPatient] = useState<Patient>();
  const params = useParams<{ id: string }>();
  
  useEffect(()=>{
    const fetchPatientData = async () => {
      try {
        if(!lastPatient || lastPatient.id !== params.id ){
          const { data: patientData } = await axios.get<Patient>(`${apiBaseUrl}/patients/${params.id}`);
          setPatient(patientData);   
          dispatch({ type: "UPDATE_PATIENT", payload: patientData }); 
        }else{
          setPatient(lastPatient);
        }
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatientData();

  }, []); 

  if (!patient)
    return null;

  const icon: SemanticICONS = GenderIcon[patient.gender];
  return (
    <div className="App">
         <Container>
           <h3>{patient.name}<Icon name={icon}/></h3>
           <p>ssn: {patient.ssn}<br />
           ocupation: {patient.occupation}</p>
         </Container>
    </div>
  );
};

export default PatientDetailPage;
