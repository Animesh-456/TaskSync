import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
//import { readAtom, writeAtom } from "jotai-nexus";
import { atom, createStore } from "jotai";
import storage from "../../jotai/atom";
import { use } from "react";
const URL = 'http://localhost:4000';
const add = async (user) => {
    const response = await axios.post(`${URL}/register`, user).then(response => {
        let usr = JSON.stringify(user);
        localStorage.setItem("empdetails", usr)
    }).catch(error => {
        console.log(error)
    })
}

export default add