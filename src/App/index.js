import React, { useState, useEffect } from 'react';
import './App.scss';
import StudentForm from '../components/StudentForm';
import { getStudents } from '../helpers/data/studentData';
import StudentCard from '../components/StudentCard';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.warn(students);
    getStudents().then((response) => setStudents(response));
  }, []);

  console.warn(students);

  return (
  <div className='App'>
    <StudentForm formTitle='Add Student'
    setStudents={setStudents}
    />
    <hr />
    <div className = "card-container">
    {students.map((studentInfo) => (
      <StudentCard
        key={studentInfo.firebaseKey}
        firebaseKey={studentInfo.firebaseKey}
        name={studentInfo.name}
        teacher={studentInfo.teacher}
        grade={Number(studentInfo.grade)}
        setStudents={setStudents}
      />
    ))}
    </div>
  </div>
  );
}

export default App;
