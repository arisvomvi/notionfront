import axios from './axios';

const resource = '/api/blocks';

export const fetchBlock = blockId => {
  console.log('fetchBlock');
  return axios
    .get(`${resource}/${blockId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const fetchBlockChildren = blockId => {
  console.log('fetchBlockChildren');
  return axios
    .get(`${resource}/${blockId}/children`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetchBlockChildren:', error);
      throw error;
    });
};

export const appendBlock = (blockId, payload) => {
  console.log('appendBlock');
  return axios
    .patch(`${resource}/${blockId}/children`, payload)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const updateBlock = (blockId, payload) => {
  console.log('updateBlock');
  return axios
    .patch(`${resource}/${blockId}`, payload)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating block:', error.response || error.message);
      throw error;
    });
};

export const deleteBlock = blockId => {
  console.log('deleteBlock');
  return axios
    .delete(`${resource}/${blockId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting block:', error.response || error.message);
      throw error;
    });
};
