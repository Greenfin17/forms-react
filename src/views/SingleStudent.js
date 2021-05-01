import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleStudent } from '../helpers/data/studentData';

function SingleStudent() {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleStudent(id)
      .then(setStudent);
  }, []);
  return (
    <div>
      <h2>{student?.name}</h2>
      <h3>{student?.teacher}</h3>
      <h4>{student?.grade}</h4>
    </div>
  );
}

SingleStudent.propTypes = {
  id: PropTypes.string
};
export default SingleStudent;
