import React from 'react';
import '../App/App.scss';
import PropTypes from 'prop-types';
import StudentCard from '../components/StudentCard';

function Students({ students, setStudents }) {
  return (
  <div className='App'>
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

Students.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};

export default Students;
