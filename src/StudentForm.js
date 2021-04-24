import { React, useState } from 'react';
import addStudent from './helpers/data/studentData';

export default function StudentForm() {
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
    addStudent(student);
    // add a Student
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
      <h2></h2>
      <label>Name: </label>
      <input
        name='name' type='text'
        placeholde='Name' value={student.name}
        onChange={handleInputChange}></input>
      <label>Teacher: </label>
      <input></input>
      <label>Grade: </label>
      <input
        name='grade' type='number'
        placeholder='Grade' value={student.grade}
        onChange={handleInputChange}></input>
      <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  );
}
