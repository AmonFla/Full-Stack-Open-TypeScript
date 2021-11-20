import React from "react";
import { Grid, Button, Segment } from "semantic-ui-react";
import { Field, Formik, Form } from "formik";

import { TextField, DiagnosisSelection,  NumberField } from "../AddPatientModal/FormField";
import { Entry, HealthCheckEntry, HospitalEntry,OccupationalHealthcareEntry} from "../types";
import { useStateValue } from "../state";
import { parseGenericDate, parseGenericString } from "../utils/validation";



export type EntryFormValues = Omit<Entry, "id" > | Omit<HealthCheckEntry, "id">  | Omit<OccupationalHealthcareEntry, "id">  | Omit<HospitalEntry, "id"> ;

interface Props {
  onSubmit: (values: EntryFormValues) => void;
  onCancel: () => void;
  type: string;
}
 

export const AddEntryForm: React.FC<Props> = ({ onSubmit, onCancel, type }) => {
    const [{ diagnosis }] = useStateValue();

      let  init: Omit<Entry, "id" > = {
        description: "",
        date: "",
        specialist: "",
        diagnosisCodes: [],
        type:"HealthCheck",
      };  
      switch(type){
        case "HealthCheck":
          init = {
            ...init,
            type:"HealthCheck",
            healthCheckRating: 0
          } as Omit<HealthCheckEntry, "id"> ; 
          break;
        case "Hospital":
          init = {
            ...init,
            type:"Hospital",
            discharge:{
              date: "",
              criteria: ""
            } 
          } as Omit<HospitalEntry, "id"> ; 
          break;
        case "OccupationalHealthcare":
            init = {
              ...init,
              type:"OccupationalHealthcare",
              sickLeave:{
                startDate: "",
                endDate: ""
              },
              employerName:""
            } as Omit<OccupationalHealthcareEntry, "id"> ; 
      }
  return (
    <Formik
      initialValues={init}
      
      onSubmit={onSubmit}
      validate={values => { 
        const requiredError = "Field is required";
        const invalidString = "Invalid String";
        const invalidDate = "Invalid Date"; 
        interface DischargeError{
          date?: string;
          criteria?: string;
        }
        const errors: { [field: string]: string | DischargeError } = {};
        if (!values.description) {
          errors.description = requiredError;
        }else if(!parseGenericString(values.description)){
          errors.description = invalidString;
        }

        if (!values.date) {
          errors.date = requiredError;
        }else if(!parseGenericDate(values.date)){
          errors.date = invalidDate;
        }
        
        if (!values.specialist) {
          errors.specialist = requiredError;
        }else if(!parseGenericString(values.specialist)){
          errors.specialist = invalidString;
        }
        
        switch(type){ 
          case "Hospital":
            const valoresHospital = values as Omit<HospitalEntry, "id">;
            const discharge: DischargeError = {};
            if (!valoresHospital.discharge.criteria) {
              discharge.criteria = requiredError;
            }else if(!parseGenericString(valoresHospital.discharge.criteria)){
              discharge.criteria =invalidString;
            }

            if (!valoresHospital.discharge.date) { 
              discharge.date = requiredError; 
            }else if(!parseGenericDate(valoresHospital.discharge.date)){
              discharge.date = invalidDate;  
            }

            if(discharge !== {})
              errors.discharge = discharge;

            break;
          case "OccupationalHealthcare":  
            const valoresOcupational = values as Omit<OccupationalHealthcareEntry, "id"> ;
            if (!valoresOcupational.employerName) {
              errors.employerName = requiredError;
            }else if(!parseGenericString(valoresOcupational.employerName)){
              errors.employerName = invalidString;
            }
            break;
        }
        console.log(errors);
        return errors;
      }}
    >
      {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
        return (
          <Form className="form ui"> 
            <Field
              label="Description"
              placeholder="Description"
              name="description"
              component={TextField}
            />
            <Field
              label="Date"
              placeholder="YYYY-MM-DD"
              name="date"
              component={TextField}
            />
            <Field
              label="Specialist"
              placeholder="Specialist"
              name="specialist"
              component={TextField}
            />
            {(type==="HealthCheck")?
              <Field
                label="HealthCheckRating" 
                name="healthCheckRating"
                component={NumberField}
                min={0}
                max={3}
              />
            :null}
            {(type==="Hospital")?
              <Segment>
                <h4>Discharge:</h4>
                <Field
                  label="Criteria" 
                  name="discharge.criteria"
                  placeholder="Criteria"
                  component={TextField} 
                />
                <Field
                  label="Date" 
                  name="discharge.date"
                  placeholder="Date"
                  component={TextField} 
                />

              </Segment>
            :null}
            {(type==="OccupationalHealthcare")?
              <>
                <Field
                  label="EmployerName" 
                  name="employerName"
                  placeholder="EmployerName"
                  component={TextField} 
                />
                <Segment>
                  <h4>Discharge:</h4>
                  <Field
                    label="Start Date" 
                    name="sickLeave.startDate"
                    placeholder="Start Date"
                    component={TextField} 
                  />
                  <Field
                    label="End Date" 
                    name="sickLeave.endDate"
                    placeholder="End Date"
                    component={TextField} 
                  />

                </Segment>
              </>
            :null}
            <DiagnosisSelection            
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                diagnoses={Object.values(diagnosis)}          
            />   
            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button
                  type="submit"
                  floated="right"
                  color="green"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEntryForm;