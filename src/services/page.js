import axios from './axios';

const resource = '/api/pages';

export const fetchPage = pageId => {
  return axios
    .get(`${resource}/${pageId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const updatePage = (pageId, properties) => {
  return axios
    .patch(`${resource}/${pageId}`, { properties })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const fetchPageProperty = (pageId, property) => {
  return axios
    .get(`${resource}/${pageId}/properties/${property}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const createPage = payload => {
  return axios
    .post(`${resource}`, payload)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
