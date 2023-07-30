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
    let resp = axiosInstance.get(`/task/viewtasks`, { params: { id: userId, status: status } });
    return resp
};


export const recentTasks = (userId) => {
    const userdata = localStorage.getItem('empdetails');
    const token = JSON.parse(userdata);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;
    let resp = axiosInstance.get(`/task/recent-tasks`, { params: { id: userId } });
    return resp
};

export const markdone = (id) => {
    let resp = axiosInstance.post(`/task/markdone`, { params: id });
    return resp
}

export const viewtaskID = (id) => {
    const userdata = localStorage.getItem('empdetails');
    const token = JSON.parse(userdata);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;
    let resp = axiosInstance.get(`/task/viewtaskbyid`, { params: { id: id } });
    return resp
};


export const updateemployee = (user) => {
    let resp = axiosInstance.post(`/postemployeedetails`, user);
    return resp
}


