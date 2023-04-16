import employee from '../schema/employee-schema.js';
import bcrypt from 'bcrypt'
export const addemployee = async (emp) => {
    let data = {
        fname: emp.fname,
        lname: emp.lname,
        email: emp.email,
        account_type: emp.account_type,
        password: ""
    }
    bcrypt.hash(emp.password, 10).then(async function (hash) {
        data.password = hash
        const newEmployee = new employee(data);
        await newEmployee.save();
        return newEmployee
    });

    //console.log("password after hash", data.password)
}
