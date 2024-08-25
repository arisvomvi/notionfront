import axios from './axios';

const resource = '/api/blocks';

export const fetchBlock = blockId => {
  return axios
    .get(`${resource}/${blockId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const fetchBlockChildren = blockId => {
  return axios
    .get(`${resource}/${blockId}/children`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetchBlockChildren:', error);
      throw error;
    });
};

export const appendBlock = (blockId, payload) => {
  return axios
    .patch(`${resource}/${blockId}/children`, payload)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const updateBlock = (blockId, payload) => {
  return axios
    .patch(`${resource}/${blockId}`, payload)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating block:', error.response || error.message);
      throw error;
    });
};

export const deleteBlock = blockId => {
  return axios
    .delete(`${resource}/${blockId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting block:', error.response || error.message);
      throw error;
    });
};
