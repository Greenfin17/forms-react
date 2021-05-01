import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getStudents = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/students.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addStudent = (studentObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/students.json`, studentObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/students/${response.data.name}.json`, body)
        .then(() => {
          getStudents().then((studentArray) => resolve(studentArray));
        })
        .catch((error) => reject(error));
    });
});

const deleteStudent = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/students/${firebaseKey}.json`)
    .then(() => getStudents().then((studentArr) => resolve(studentArr)))
    // or .then((resolve))
    .catch((error) => reject(error));
});

const updateStudent = (firebaseKey, studentObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/students/${firebaseKey}.json`, studentObj)
    .then(() => getStudents().then((studentArr) => resolve(studentArr)))
    .catch((error) => reject(error));
});

const getSingleStudent = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/students/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  addStudent, getStudents,
  deleteStudent, updateStudent,
  getSingleStudent
};
