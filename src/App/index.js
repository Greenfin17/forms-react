import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getStudents } from '../helpers/data/studentData';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.warn(students);
    getStudents().then((response) => setStudents(response));
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes
          students={students}
          setStudents={setStudents}
        />
      </Router>
    </>
  );
}

export default App;
