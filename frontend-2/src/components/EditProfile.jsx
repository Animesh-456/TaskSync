import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { getUser } from '../api/endpoints'
const EditProfile = () => {
    const [empdetails, setempdetails] = useState([]);
    useEffect(() => {
        const userdata = localStorage.getItem('empdetails');
        const token = JSON.parse(userdata);
        // auth(token).then(resp => {
        //     console.log("resp", resp)
        //     setempdetails(resp)
        // })

        getUser(token).then(d => {
            if (d.status == 500) {
                localStorage.removeItem("empdetails")
                window.location.href = "/login"
            }
            console.log("data is ", d.status)
            setempdetails(d.data)

        }).catch(error => {
            toast.error(error)
        })
    }, [])

    const handelsubmit = () => {

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
                            <input type="text" placeholder="Firstname" value={empdetails.fname} class="border border-gray-400 py-3 px-5 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="Lname" className='px-2 font-medium'>Last Name</label>
                            <input type="text" placeholder="Surname" value={empdetails.lname} class="border border-gray-400 py-3 px-5 rounded-md" />
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

export default EditProfile
