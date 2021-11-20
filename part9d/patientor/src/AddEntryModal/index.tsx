import React from 'react';
import { Modal, Segment } from 'semantic-ui-react';
import AddPatientForm, { EntryFormValues } from './AddEntryForm';

interface Props {
  entryType: string
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: EntryFormValues) => void;
  error?: string;
}

const AddEntryModal = ({ modalOpen, onClose, onSubmit, error , entryType}: Props) => (
  <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
    <Modal.Header>Add {entryType} Entry</Modal.Header>
    <Modal.Content>
      {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
      <AddPatientForm onSubmit={onSubmit} onCancel={onClose} type={entryType}/>
    </Modal.Content>
  </Modal>
);

export default AddEntryModal;
