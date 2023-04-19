import axios from "axios"
const URL = 'http://localhost:4000';
const login = async (user) => {
    const response = await axios.post(`${URL}/login`, user).then(response => {
        let usr = JSON.stringify(user);
        localStorage.setItem("empdetails", usr)
    }).catch(error => {
        console.log(error)
    })
}

export default login