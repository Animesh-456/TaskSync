import React, { useEffect, useState } from 'react'
import { viewTasks } from '../api/endpoints';
import logo from "../assets/logo.svg"

const Tasks = () => {
    // const tasks = [
    //     { id: 1, title: 'Task 1', status: 'In Progress' },
    //     { id: 2, title: 'Task 2', status: 'Completed' },
    //     { id: 3, title: 'Task 3', status: 'In Progress' },
    //     // Add more tasks as needed
    // ];

    const [activeLink, setactivelink] = useState('pending');
    const [task, settask] = useState([])
    const [completetask, setcompletetask] = useState([])

    useEffect(() => {
        const userdata = localStorage.getItem('empdetails');
        const usr = JSON.parse(userdata);
        viewTasks(usr.id, activeLink).then(d => {
            settask(d.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    console.log("tasks are:- ", task)
    return (

        <div class="w-full py-20 px-10 mx-auto">
            <nav className="bg-gray-50 mt-5 w-1/4">
                <div className="container mx-auto py-4 flex justify-between">
                    <div>
                        <a
                            href="#"
                            className={`${activeLink === 'pending'
                                ? 'text-red-500 border-b-2 border-red-500'
                                : 'text-gray-500 hover:text-red-500'
                                } px-3 py-2 text-md font-medium `}
                            onClick={() => setactivelink('pending')}
                        >
                            Pending Tasks
                        </a>
                        <a
                            href="#"
                            className={`${activeLink === 'complete'
                                ? 'text-red-500 border-b-2 border-red-500'
                                : 'text-gray-500 hover:text-red-500'
                                } px-3 py-2 text-md font-medium`}
                            onClick={() => setactivelink('complete')}
                        >
                            Completed Tasks
                        </a>
                    </div>
                </div>
            </nav>

            {activeLink === 'pending' ? (
                <div className="container mx-auto p-4">
                    {task.length ? (<h1 className="text-3xl font-bold mb-4">Task List</h1>) : (<h1 className="text-3xl font-bold mb-4">No Tasks yet</h1>)}

                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            {task.length ? (
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                            ) : (<></>)}

                            <tbody className="bg-white divide-y divide-gray-200">
                                {task.length ? task.map((task) => (
                                    <tr key={task.id} className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{task._id}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{task.title}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{task.status}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded hover:bg-yellow-600">
                                                Details
                                            </button>

                                            <button className="bg-green-500 text-white px-4 py-2 mr-2 rounded hover:bg-green-600">
                                                Mark as Done
                                            </button>

                                        </td>
                                    </tr>
                                )) : ((<div>
                                    <img src={logo} alt="joh" className="mx-auto w-4/3 md:w-1/4  md:flex" />
                                </div>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto p-4">
                    {completetask.length ? (<h1 className="text-3xl font-bold mb-4">Completed Task List</h1>) : (<h1 className="text-3xl font-bold mb-4">No Completed Task</h1>)}
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            {completetask.length ? (
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                            ) : (<></>)}
                            <tbody className="bg-white divide-y divide-gray-200">
                                {completetask.length ? completetask.map((task) => (
                                    <tr key={task.id} className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{task._id}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{task.title}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{task.status}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded hover:bg-yellow-600">
                                                Details
                                            </button>

                                            <button className="bg-green-500 text-white px-4 py-2 mr-2 rounded hover:bg-green-600">
                                                Mark as Done
                                            </button>

                                        </td>
                                    </tr>
                                )) : (<div>
                                    <img src={logo} alt="joh" className="mx-auto w-4/3 md:w-1/4  md:flex" />
                                </div>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Tasks
