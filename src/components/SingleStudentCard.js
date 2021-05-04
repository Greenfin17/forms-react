import PropTypes from 'prop-types';

function SingleStudentCard({ children, student }) {
  return (
    <h1>Student: {student.name}</h1>
    {children}
    <div className='footer'>
      <h6>Footer</h6>
    </div>
  );
}

SingleStudentCard.PropTypes = {
  children: PropTypes.children,
  student: PropTypes.string.isRequired
};

export default SingleStudentCard;
