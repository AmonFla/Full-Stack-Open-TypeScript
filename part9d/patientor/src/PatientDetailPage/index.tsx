import React, {useEffect, useState} from "react";
import axios from "axios";



import { Patient, GenderIcon, Entry} from "../types";
import { apiBaseUrl } from "../constants";
import { useStateValue, updatePatient, addEntry } from "../state";
import { useParams } from "react-router";
import { Container, Icon, SemanticICONS, Button } from "semantic-ui-react"; 
import EntryDetail from "./EntryDetail";
import AddEntryModal from "../AddEntryModal";
import { EntryFormValues } from "../AddEntryModal/AddEntryForm";
//import EntryDetail from "./EntryDetail";

const PatientDetailPage: React.FC = () => {
  const [{ lastPatient  }, dispatch] = useStateValue();
  const [patient, setPatient] = useState<Patient>();
  const params = useParams<{ id: string }>();
  
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewPatient = async (values: EntryFormValues) => {
    try {
      const { data: newEntry } = await axios.post<Entry>(
        `${apiBaseUrl}/patients/${params.id}/entries`,
        values
      ); 
      dispatch(addEntry(patient as Patient,newEntry));      
      closeModal();
    } catch (e) {
      console.error(e.response?.data || 'Unknown Error');
      setError(e.response?.data?.error || 'Unknown error');
    }
  };

  useEffect(()=>{
    const fetchPatientData = async () => {
      try {
        if(!lastPatient || lastPatient.id !== params.id ){
          const { data: patientData } = await axios.get<Patient>(`${apiBaseUrl}/patients/${params.id}`);
          setPatient(patientData);   
          dispatch(updatePatient(patientData)); 
        }else{
          setPatient(lastPatient);
        }
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatientData();

  }, [params, dispatch]); 

  if (!patient)
    return null;

  const icon: SemanticICONS = GenderIcon[patient.gender]; 
  return (
    <div className="App">
         <Container>
           <h3>{patient.name}<Icon name={icon}/></h3>
           <p>ssn: {patient.ssn}<br />
           ocupation: {patient.occupation}</p>
           <h3>Entries</h3>
           {patient.entries.map( entry => <EntryDetail key={entry.id} entry={entry} /> )}
         </Container>
         <AddEntryModal
            modalOpen={modalOpen}
            onSubmit={submitNewPatient}
            error={error}
            onClose={closeModal}
          />
          <Button onClick={() => openModal()}>Add New Entry</Button>
    </div>
  );
};

export default PatientDetailPage;
