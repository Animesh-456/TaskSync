import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { getUser } from '../api/endpoints'
import maleavatar from '../assets/male-avatar.svg'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
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

    const [empname, setempname] = useState(empdetails?.name)

    const handleSubmit = () => {
        setempname()
    }




    // return (
    //     <div class="container">
    //         <div class="w-full lg:w-1/2 py-16 mt-20 px-12 mx-auto">
    //             <h2 class="text-4xl mb-4 font-medium text-gray-700"><span className="text-red-500">Edit</span> your Profile</h2>
    //             <p class="mb-4">
    //                 Edit you data and click save
    //             </p>
    //             <form action="#">
    //                 <div class="grid grid-cols-2 gap-2">
    //                     <div>
    //                         <label htmlFor="Fname" className='px-2 font-medium'>First Name</label>
    //                         <input type="text" placeholder="Firstname" value={empdetails.fname} class="border border-gray-400 py-3 px-5 rounded-md" />
    //                     </div>
    //                     <div>
    //                         <label htmlFor="Lname" className='px-2 font-medium'>Last Name</label>
    //                         <input type="text" placeholder="Surname" value={empdetails.lname} class="border border-gray-400 py-3 px-5 rounded-md" />
    //                     </div>
    //                 </div>
    //                 <div class="mt-5">
    //                     <label htmlFor="Email" className='px-2 font-medium'>Description</label>
    //                     <textarea class="border border-gray-400 py-3 px-5 w-full rounded-md" name="description" id="" cols="30" rows="5"></textarea>
    //                     {/* <input type="text" placeholder="Email" value={empdetails.email} onChange={setprofile("email")} class="border border-gray-400 py-3 px-5 w-full rounded-md" /> */}
    //                 </div>

    //                 <div class="grid grid-cols-2 gap-5 mt-10">
    //                     <a className="w-full cursor-pointer bg-white py-3 border border-red-500 rounded-md text-center text-red-500 hover:text-white hover:bg-red-500 hover:duration-700 " onClick={handelsubmit}>Save</a>

    //                 </div>
    //                 <ToastContainer
    //                     position="top-center"
    //                     autoClose={5000}
    //                     hideProgressBar={false}
    //                     newestOnTop={false}
    //                     closeOnClick
    //                     rtl={false}
    //                     pauseOnFocusLoss
    //                     draggable
    //                     pauseOnHover
    //                     theme="light"
    //                 />
    //             </form>
    //         </div>
    //     </div>
    // )

    // return (
    //     <div className="mt-10 pt-20 bg-red-50 w-1/2 mx-auto rounded-xl">
    //         <div class="flex items-center justify-center">
    //             <img src={maleavatar} alt="male avatar" class="w-20 h-20" />
    //         </div>
    //         <form className="p-4 max-w-md mx-auto" onSubmit={handleSubmit}>
    //             <div className="mb-4">
    //                 <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
    //                     Name
    //                 </label>
    //                 <input
    //                     type="text"
    //                     id="name"
    //                     name="name"
    //                     value={empdetails.fname}
    //                     onChange={handleSubmit}
    //                     className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
    //                     required
    //                 />
    //             </div>
    //             <div className="mb-4">
    //                 <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
    //                     Email
    //                 </label>
    //                 <input
    //                     type="email"
    //                     id="email"
    //                     name="email"
    //                     value={empdetails.email}
    //                     onChange={handleSubmit}
    //                     className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
    //                     required
    //                 />
    //             </div>
    //             <div className="mb-4">
    //                 <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
    //                     Bio
    //                 </label>
    //                 <textarea
    //                     id="bio"
    //                     name="bio"
    //                     onChange={handleSubmit}
    //                     className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
    //                     rows={4}
    //                 />
    //             </div>
    //             {/* Add other fields as necessary */}
    //             <button
    //                 type="submit"
    //                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //             >
    //                 Save Changes
    //             </button>
    //         </form>
    //     </div>
    // );

    return (
        <div class='flex items-center justify-center mx-auto mt-10'>
            <form>
                <div className="space-y-8">
                    <div class="flex items-center justify-center">
                        <img src={maleavatar} alt="male avatar" class="w-20 h-20" />
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-3xl font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={empdetails?.fname}
                                        onChange={handleSubmit}
                                        className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={empdetails?.lname}
                                        className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={empdetails?.email}
                                        disabled='true'
                                        className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {/* <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:red-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div> */}

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description/Bio
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        rows={5}
                                        className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <a href= '/dash' type="button" className="text-sm font-semibold leading-6 text-blue-900">
                        Cancel
                    </a>
                    <button
                        type="submit"
                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )

}

export default EditProfile
