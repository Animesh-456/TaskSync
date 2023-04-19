import employee from '../schema/employee-schema.js';
import bcrypt from 'bcrypt'
const addemployee = async (emp) => {
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
}

const loginemployee = async (emp) => {
    let data = {
        email: emp.email,
        password: emp.password
    }
    const usr = await employee.findOne({
        email: data.email
    })

    if (!usr) {
        return
    }

    bcrypt.compare(data.password, usr.password, function (err, result) {
        if (result == true) {
            return result
        }
    });
}

export default { addemployee, loginemployee }
