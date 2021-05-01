import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addStudent, updateStudent } from '../helpers/data/studentData';

const StudentForm = ({
  formTitle = 'Form Title',
  setStudents,
  name,
  teacher,
  grade,
  firebaseKey
}) => {
  const [student, setStudent] = useState({
    name: name || '',
    teacher: teacher || '',
    grade: grade || 0,
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value)
        : e.target.value,
    }));
  };
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    // add a Student
    if (student.firebaseKey) {
      updateStudent(student.firebaseKey, student).then((studentArray) => setStudents(studentArray));
    } else {
      addStudent(student).then((studentArray) => setStudents(studentArray));
      history.push('/students');
    }
    // clear student state
    setStudent({
      name: '',
      teacher: '',
      grade: 0,
      firebaseKey: null
    });
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
  setStudents: PropTypes.func,
  name: PropTypes.string,
  teacher: PropTypes.string,
  grade: PropTypes.number,
  firebaseKey: PropTypes.string,
};

export default StudentForm;
