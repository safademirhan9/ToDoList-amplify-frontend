// api.js

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchToDoList = async () => {
  try {
    const response = await api.get('/todos');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addToDoItem = async (taskName) => {
  try {
    const response = await api.post('/todos', { TaskName: taskName });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteToDoItem = async (taskID) => {
  try {
    const response = await api.delete('/todos', { data: { TaskID: taskID } });
    return response.data;
  } catch (error) {
    throw error;
  }
};
