import employee from '../schema/employee-schema.js';
import task from '../schema/task-chema.js';
import sendmail from '../helpers/mail.js';
import updateTask from '../helpers/globalmail/update-task.js';
import assignTask from '../helpers/globalmail/asssign-task.js'

const addtask = async (tk) => {
    let data = {
        title: tk.title,
        description: tk.description,
        assignedBy: tk.assignedBy,
    }
    let create = new task(data);
    await create.save();
    return create
}


const viewtask = async (userid, status) => {
    let tasks = await task.find().populate({
        path: 'assignedTo assignedBy',
        select: 'fname lname email account_type',
        assignedTo: userid,
        status: status
    })
    return tasks
}

const viewstaskByid = async (id) => {
    let tasks = await task.find({ _id: id }).populate({
        path: 'assignedTo assignedBy',
        select: 'fname lname email account_type'
    })
    return tasks
}

const updatetask = async (tk) => {
    let result = await task.findByIdAndUpdate({ _id: tk.id }, { title: tk.title, description: tk.description }, { new: true })
    let mailtosend = await employee.findOne({ _id: result.assignedTo })
    let mail = updateTask(mailtosend.fname, result._id, result.title, result.description)
    const subject = mail.subject
    const text2 = mail.body
    sendmail(mailtosend.email, subject, text2)
    return result
}

const deletetask = async (tk) => {
    await task.findByIdAndDelete({ _id: tk })
}

const assigntask = async (tk) => {
    let result = await task.findByIdAndUpdate({ _id: tk.id }, { assignedTo: tk.assignedTo }, { new: true })
    let mailtosend = await employee.findOne({ _id: result.assignedTo })
    let mailfrom = await employee.findOne({ _id: result.assignedBy })
    let mail = assignTask(mailtosend.fname, result._id, result.title, result.description, mailfrom.fname)
    const subject = mail.subject
    const text = mail.body
    sendmail(mailtosend.email, subject, text)
    return result
}

const taskcontroller = {
    addtask,
    viewtask,
    viewstaskByid,
    updatetask,
    deletetask,
    assigntask
}


export default taskcontroller