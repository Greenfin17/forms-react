import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleStudent } from '../helpers/data/studentData';

function Home({ user }) {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleStudent(id)
      .then(setStudent);
  });
  return (
    <div>
      { user
        ? <h1>Hello {user.userName}</h1>
        : <h1>Home Page</h1>
      }
    { student?.name}
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
export default Home;
