import './App.css';
import React, {useState, useEffect} from 'react';
import WorkerForm from './WorkerForm';
import dummyData from './dummyData';

const initialFormValues = {
  username: '',
  email: '',
  department: ''
}

function App() {
  const [workers, setWorkers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newWorker = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      department: formValues.department
    }
  }

  return (
    <div className="App">
      <h1>Loaded</h1>
      <div>
        <WorkerForm 
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
      </div>
    </div>
  );
}

export default App;
