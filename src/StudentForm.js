import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { addStudent } from './helpers/data/studentData';

const StudentForm = ({ formTitle = 'Form Title', setStudents}) => {
  const [student, setStudent] = useState({
    name: '',
    teacher: '',
    grade: 0
  });

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value)
        : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add a Student
    addStudent(student).then((studentArray) => setStudents(studentArray));;
  };
  return (
    <>
    <div className='student-form'>
      <form
      id='addStudentForm'
      autoComplete='off'
      onSubmit={handleSubmit}
      // onSubmit={}
      >
      <h2>{formTitle}</h2>
      <label>Name: </label>
      <input
        name='name' type='text' placeholder='Enter a Student Name'
        value={student.name} onChange={handleInputChange}></input>
      <label>Teacher: </label>
      <input
        name='teacher' type='text'
        value={student.teacher} onChange={handleInputChange}></input>
      <label>Grade: </label>
      <input
        name='grade' type='number'
       value={student.grade} onChange={handleInputChange}></input>
      <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func
};

export default StudentForm;
