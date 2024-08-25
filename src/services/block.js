import axios from './axios';

const resource = '/notion/page';

export const fetchBlockChildren = blockId => {
  return axios
    .get(`${resource}/${blockId}/children`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetchBlockChildren:', error);
      throw error;
    });
};
