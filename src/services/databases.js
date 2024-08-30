import axios from './axios';

const resource = '/api/databases';

export const fetchDatabase = databaseId => {
  console.log('fetchDatabase');
  return axios
    .get(`${resource}/${databaseId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const queryDatabase = (databaseId, query) => {
  console.log('queryDatabase');
  return axios
    .post(`${resource}/${databaseId}/query`, query)
    .then(response => response.data)
    .catch(error => {
      console.error('Error querying database:', error.response || error.message);
      throw error;
    });
};
