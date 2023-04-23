import axios from "axios"
const URL = 'http://localhost:4000';
const login = async (user) => {
    let usrstatus;
    const response = await axios.post(`${URL}/login`, user).then(resp => {
        usrstatus = JSON.stringify(resp.data.resp);
        if(resp.data.resp == true){
            let user = JSON.stringify(resp.data.usr)
            localStorage.setItem("empdetails", user)
        }
    }).catch(error => {
        console.log(error)
    })
    return usrstatus
}

export default login