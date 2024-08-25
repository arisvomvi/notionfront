import axios from './axios';

const resource = '/api/pages';

export const initpage = () => {
  return axios
    .get(`/notion/init`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching page:', error);
      throw error;
    });
};

export const fetchPage = pageId => {
  return axios
    .get(`${resource}/${pageId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetchPage:', error);
      throw error;
    });
};

export const updatePage = (pageId, properties) => {
  console.log(properties);
  return axios
    .patch(`${resource}/${pageId}`, { properties })
    .then(response => response.data)
    .catch(error => {
      console.error('Error updatePage:', error);
      throw error;
    });
};

export const fetchPageProperty = (pageId, property) => {
  console.log(property);
  return axios
    .get(`${resource}/${pageId}/properties/${property}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updatePage:', error);
      throw error;
    });
};

export const createPage = payload => {
  console.log('createPage', payload);
  return axios
    .post(`${resource}`, payload)
    .then(response => response.data)
    .catch(error => {
      console.error('Error creating page:', error);
      throw error;
    });
};
