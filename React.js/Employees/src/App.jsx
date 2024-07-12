import React, { useState } from 'react';
import axios from 'axios';
import DisplayEmployee from './components/DisplayEmployee';
import './App.css'

const sampleEmployee = {
  name: {first: 'John', last: 'Doe'},
  picture: {medium: 'https://randomuser.me/api/portraits/men/75.jpg'},
  email: 'john.doe@random.com',
};

function App() {

  const [employee, setEmployee] = useState(sampleEmployee)

  const getEmployee = () => {
    axios.get('https://randomuser.me/api?nat=en')
      .then((response) => {
        setEmployee(response.data.results[0])
      })
  }

  return (
    <div className="App">
      <DisplayEmployee
        firstname={employee.name.first}
        lastname={employee.name.last}
        image={employee.picture.medium}
        email={employee.email}
      />
      <button type='button' onClick={getEmployee}>Next Employee</button>
    </div>
  );

}

export default App;
