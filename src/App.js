import React, {useState} from 'react';
import UserForm from './components/UserForm.jsx';
import Results from './components/Results.jsx';
import './App.css';

function App() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passconfirm: ""
  });
  return (
    <div className="App">
      <UserForm inputs = {state} setInputs = {setState} />
      <Results data = {state}/>
    </div>
  );
}

export default App;
