import axios from './axios';

const resource = '/api/databases';

export const fetchDatabase = databaseId => {
  return axios
    .get(`${resource}/${databaseId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
