import React, { useState, Fragment, useRef, useEffect, } from "react";
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
import Navbar from "./Navbar";
import auth from "../api/auth";
import updateemployee from "../controller/employee/empdetails";

import { getUser } from '../api/endpoints'

export default function Editprof() {
    const [user, setuser] = useState([])

    const [check, setcheck] = useState(false)

    const setprofile = common(setuser)

    const handelsubmit = () => {
        updateemployee(user).then(resp => {
            // editmodalshow()
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div class="container mt-5">
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
                        <label htmlFor="Email" className='px-2 font-medium'>Description</label>
                        <textarea class="border border-gray-400 py-3 px-5 w-full rounded-md" name="description" id="" cols="30" rows="5"></textarea>
                        {/* <input type="text" placeholder="Email" value={empdetails.email} onChange={setprofile("email")} class="border border-gray-400 py-3 px-5 w-full rounded-md" /> */}
                    </div>

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
    )
}

