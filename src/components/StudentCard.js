// StudentCard.js
import { deleteStudent } from '../helpers/data/studentData';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const StudentCard = ({
  firebaseKey,
  name,
  teacher,
  grade,
  setStudents 
}) => (
  const handleClick = () => {
    deleteStudent(firebaseKey)
      .then((studentArray) => setStudents(studentArray));
    console.warn(firebaseKey);
    console.warn(setStudents);
  };
  return (
  <Card body>
    <CardTitle tag='h5'>{name}</CardTitle>
    <CardText>{teacher}</CardText>
    <CardText>{grade}</CardText>
    <Button color="danger" onClick={handleClick}>Delete Student</Button>
  </Card>
  );
);

StudentCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  setStudents: PropTypes.func
};

export default StudentCard;
