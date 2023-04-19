import React, { useState, Fragment, useRef, } from "react";
import register from '../assets/register.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import common from '../helpers/common'
import { Outlet, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"
import { BsListTask } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
export default function Dash() {
    const employee = localStorage.getItem("empdetails")
    const emp = JSON.parse(employee)
    const [homestate, sethomestate] = useState(false)
    const [editstate, seteditstate] = useState(true)
    const changehomestate = () => {
        sethomestate(false)
        seteditstate(true)
    }

    const changeeditstate = () => {
        sethomestate(true)
        seteditstate(false)
    }


    const [user, setuser] = useState({
        fname: "",
        lname: "",
        email: "",
        account_type: "Assigner",
        password: "",
    })

    const [check, setcheck] = useState(false)

    const setprofile = common(setuser)

    const handelsubmit = () => {
        editmodalshow()
    }

    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    const logout = () => {
        setOpen(true)
    }

    const confirmlogout = () => {
        setOpen(false)
        toast.success("Logged out!")
        localStorage.removeItem("empdetails")
        window.location.href = "/"
    }

    const [openeditmodal, setopeneditmodal] = useState(false)

    const editmodalshow = () => {
        setopeneditmodal(true)
    }

    const editmodalclose = () => {
        setopeneditmodal(false)
        changehomestate()
    }



    console.log("Local str", emp)

    return (
        <>

            {/* <Navbar className="bg-gray-200" /> */}

            <div className="flex">
                <div className="flex flex-col h-screen p-3 bg-white shadow w-80 hidden md:inline bg-gray-200 rounded-r-xl shadow-xl">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <h2 className="text-3xl font-bold pt-5 px-5 text-gray-600"><a href="/"><span className="text-red-500">T</span>ask<span className="text-red-500">S</span>ync</a></h2>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm mt-10">
                                <li className="mt-10 pt-5 hover:text-red-500">
                                    <a
                                        style={{ cursor: "pointer" }}
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                        onClick={changehomestate}
                                    >
                                        <AiFillHome size={20} className="ml-1" />
                                        <span className="">Home</span>
                                    </a>
                                </li>
                                <li className="mt-10 pt-5 hover:text-red-500">
                                    <a
                                        style={{ cursor: "pointer" }}
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <BsListTask size={20} className="ml-1" />
                                        <span>My Tasks</span>
                                    </a>
                                </li>
                                <li className="mt-10 pt-5 hover:text-red-500">
                                    <a
                                        style={{ cursor: "pointer" }}
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                        onClick={changeeditstate}
                                    >
                                        <AiFillEdit size={20} className="ml-1" />
                                        <span>Edit Profile</span>
                                    </a>
                                </li>

                                <li className="mt-10 pt-5 hover:text-red-500">
                                    <a
                                        onClick={logout}
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <BiLogOut size={20} className="ml-1" />
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto mt-20 px-20 pt-20" hidden={homestate}>
                    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                My Name
                            </div>
                            <div className="mt-1 text-xl font-semibold text-gray-900">
                                {emp?.fname}
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Email
                            </div>
                            <div className="mt-1 text-xl font-semibold text-gray-900">
                                {emp?.email}
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Type of Account
                            </div>
                            <div className="mt-1 text-xl font-semibold text-gray-900">
                                {emp?.account_type}
                            </div>
                        </div>
                    </div>
                </div>



                <div class="container mt-5" hidden={editstate}>
                    <div class="w-full lg:w-1/2 py-16 px-12 mx-auto">
                        <h2 class="text-4xl mb-4 font-medium text-gray-700"><span className="text-red-500">Edit</span> your Profile</h2>
                        <p class="mb-4">
                            Edit you data and click save
                        </p>
                        <form action="#">
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <label htmlFor="Fname" className='px-2 font-medium'>First Name</label>
                                    <input type="text" placeholder="Firstname" value={user.fname} onChange={setprofile("fname")} class="border border-gray-400 py-3 px-5 rounded-md" />
                                </div>
                                <div>
                                    <label htmlFor="Lname" className='px-2 font-medium'>Last Name</label>
                                    <input type="text" placeholder="Surname" value={user.lname} onChange={setprofile("lname")} class="border border-gray-400 py-3 px-5 rounded-md" />
                                </div>
                            </div>
                            <div class="mt-5">
                                <label htmlFor="Email" className='px-2 font-medium'>Email</label>
                                <input type="text" placeholder="Email" value={user.email} onChange={setprofile("email")} class="border border-gray-400 py-3 px-5 w-full rounded-md" />
                            </div>

                            <div class="mt-5">
                                <label htmlFor="TypeOfAccount" className='px-2 font-medium'>Type of account</label>
                                <select name="id" value={user.account_type} onChange={setprofile("account_type")} className='border border-gray-400 py-3 px-5 w-full rounded-md'>
                                    <option value="Assigner">Assigner</option>
                                    <option value="Employee">Employee</option>
                                </select>
                                {/* <input type="option" placeholder="Email" class="border border-gray-400 py-3 px-5 w-full rounded-md" /> */}
                            </div>

                            {/* <div class="mt-5">
                                    <label htmlFor="ConfirmPassword" className='px-2 font-medium'>Confirm Password</label>
                                    <input type="password" value={confirmPassword} onChange={confirm_pass("confirm_pass")} placeholder="Confirm Password" class="border border-gray-400 py-3 px-5 w-full rounded-md" />
                                </div> */}

                            <div class="grid grid-cols-2 gap-5 mt-10">
                                <a className="w-full cursor-pointer bg-white py-3 border border-red-500 rounded-md text-center text-red-500 hover:text-white hover:bg-red-500 hover:duration-700 " onClick={handelsubmit}>Save</a>

                            </div>
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </form>
                    </div>
                </div>


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
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                                </div>
                                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                        Logging Out
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">
                                                            Are you sure you want to logout ?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                onClick={confirmlogout}
                                            >
                                                Logout
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


                <Transition.Root show={openeditmodal} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={editmodalclose}>
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
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center bg-green-100 justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                                    <CheckCircleIcon className="h-8 w-10 text-green-600" aria-hidden="true" />
                                                </div>
                                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                        Profile Updated
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">
                                                            Your profile has been updated
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <a
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                onClick={editmodalclose}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Back to Dashboard
                                            </a>
                                            {/* <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={() => setOpen(false)}
                                                ref={cancelButtonRef}
                                            >
                                                Cancel
                                            </button> */}
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>


            </div>
        </>
    );
}
