import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const addStudent = (studentObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/students.json`, studentObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/students/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Student added', studentObj)));
    })
    .catch((error) => reject(error));
});

export default addStudent;
