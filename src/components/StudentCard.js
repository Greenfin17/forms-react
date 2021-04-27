// StudentCard.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import { deleteStudent } from '../helpers/data/studentData';
import StudentForm from './StudentForm';

const StudentCard = ({
  firebaseKey,
  name,
  teacher,
  grade,
  setStudents
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteStudent(firebaseKey)
          .then((studentArray) => setStudents(studentArray));
        break;
      case 'edit':
        console.warn('You want to edit');
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
  <Card body>
    <CardTitle tag='h5'>{name}</CardTitle>
    <CardText>{teacher}</CardText>
    <CardText>{grade}</CardText>
    <Button color="danger" onClick={() => handleClick('delete')}>Delete Student</Button>
    <Button color="info" onClick={() => handleClick('edit')}>
      {editing ? 'Close Form' : 'Edit Student'}
    </Button>
    {
      editing && <StudentForm
      formTitle='Edit Student'
      firebaseKey = {firebaseKey}
      name = {name}
      teacher = {teacher}
      grade = {grade}
      setStudents={setStudents}/>
    }
  </Card>
  );
};

StudentCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  setStudents: PropTypes.func
};

export default StudentCard;
