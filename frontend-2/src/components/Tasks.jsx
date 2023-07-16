import React, { useEffect, useState, Fragment, useRef } from 'react'
import { viewTasks } from '../api/endpoints';
import logo from "../assets/logo.svg"
// import frontendroute from '../common/links';
// import { Link } from 'react-router-dom';
// import { AiFillHome } from "react-icons/ai"
// import { BsListTask } from "react-icons/bs"
// import { AiFillEdit } from "react-icons/ai"
// import { BiBold, BiLogOut } from "react-icons/bi"
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
// import { CheckCircleIcon } from '@heroicons/react/24/outline'

const Tasks = () => {

    const [activeLink, setactivelink] = useState('pending');
    const [task, settask] = useState([])


    useEffect(() => {
        const userdata = localStorage.getItem('empdetails');
        const usr = JSON.parse(userdata);
        viewTasks(usr.id, activeLink).then(d => {
            settask(d.data)
        }).catch(error => {
            console.log(error)
        })
    }, [activeLink])

    console.log("tasks are:- ", task)

    const handleconfirm = () => {

    }

    const cancelButtonRef = useRef(null)

    const [open, setOpen] = useState(false)


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
                    {task.length ? (<h1 className="text-2xl font-bold mb-4">Task List</h1>) : (<h1 className="text-2xl font-bold mb-4">No Tasks yet</h1>)}

                    <div className="bg-white shadow overflow-x-auto sm:rounded-lg">
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

                                            <button onClick={() => setOpen(true)} className="bg-green-500 text-white px-4 py-2 mr-2 rounded hover:bg-green-600">
                                                Mark as Complete
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
                    {task.length ? (<h1 className="text-2xl font-bold mb-4">Completed Task List</h1>) : (<h1 className="text-2xl font-bold mb-4">No Completed Task</h1>)}
                    <div className="bg-white shadow overflow-x-auto sm:rounded-lg">
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
                                            {/* <Link className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded hover:bg-yellow-600" to={`/task/${task._id}`} >Details</Link> */}
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


            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Mark as Complete
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Are you sure you want to mark this task as completed ?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto"
                                            onClick={handleconfirm}
                                        >
                                            Mark Complete
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </div>
    )
}

export default Tasks
