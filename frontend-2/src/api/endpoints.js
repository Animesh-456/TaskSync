import axios from 'axios';
import axiosInstance from './auth';

export const getUser = (userId) => {
    const userdata = localStorage.getItem('empdetails');
    const token = JSON.parse(userdata);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;
    let resp = axiosInstance.get(`/getempdetails`, { params: userId });
    return resp
};

export const viewTasks = (userId, status) => {
    const userdata = localStorage.getItem('empdetails');
    const token = JSON.parse(userdata);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;
    let resp = axiosInstance.get(`/task/viewtasks`, { params: { id: userId, status: status  } });
    return resp
};

