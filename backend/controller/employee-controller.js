import { model } from 'mongoose';
import employee from '../schema/employee-schema.js';
import bcrypt from 'bcrypt'
const addemployee = async (emp) => {
    let newEmployee = null;
    let data = {
        fname: emp.fname,
        lname: emp.lname,
        email: emp.email,
        account_type: emp.account_type,
        password: ""
    }
    await bcrypt.hash(emp.password, 10).then(async function (hash) {
        data.password = hash
        newEmployee = new employee(data);
        await newEmployee.save();
    });
    return newEmployee
}

const loginemployee = async (emp) => {
    let data = {
        email: emp.email,
        password: emp.password
    }
    const usr = await employee.findOne({ email: data.email })
    let resp = await bcrypt.compare(data.password, usr.password)
    return { resp, usr }
}

const empcontroller = {
    addemployee,
    loginemployee
}

export default empcontroller
