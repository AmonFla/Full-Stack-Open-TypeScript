import React from "react"; 

import { useStateValue } from "../state";
import { Diagnosis } from "../types";
import { List } from "semantic-ui-react";

interface DiagnosesDetailsProps {
  diagnosesCodes: Array<Diagnosis["code"]>;
}
const DiagnosisList: React.FC<DiagnosesDetailsProps> = ({ diagnosesCodes }) => {
  const [{ diagnosis }] = useStateValue();

  if (diagnosesCodes.length === 0){
      return null;
  }
  return (
    <List>
      <List.Item>
        <List.Header>
          {"Diagnosis"}
        </List.Header>
      </List.Item>
      {diagnosesCodes.map((code) => (
        <List.Item key={code}>
          <List.Content>
            <List.Description>
              <strong>{code} - </strong>
              {diagnosis[code] && diagnosis[code].name}
            </List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default DiagnosisList;