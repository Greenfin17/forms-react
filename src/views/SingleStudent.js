import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      { student?.name}
    </div>
  );
}

SingleStudent.propTypes = {
  id: PropTypes.string
};
export default SingleStudent;
