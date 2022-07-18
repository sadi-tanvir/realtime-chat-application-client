import React, { useEffect, useState } from 'react';
import { UploadIcon } from '../shared/re-usable-components/Icon';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios"
import { toast } from "react-toastify"
import { apiBaseUrl } from "../../utils/apiBaseUrl"

import { Link, useNavigate, useParams } from "react-router-dom"



const UpdateUserInfo = () => {
    // redux
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.authReducer)
    // const { accessToken, userInfo } = useSelector(state => state.authReducer)
    // const userState = useSelector(state => state.userUpdateReducer)

    // state
    const [picture, setPicture] = useState("")
    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState({
        name: userInfo.name,
        email: userInfo.email,
        img: userInfo.picture,
        oldPassword: "",
        newPassword: "",
    })

    // router
    const navigate = useNavigate()
    const { userId } = useParams()


    // upload picture
    const postPicture = (pic) => {
        setLoading(true)
        if (pic === undefined) {
            toast.error('file upload failed');
            return;
        }

        if (pic.type === "image/jpeg" || pic.type === "image/png" || pic.type === "image/jpg") {
            const data = new FormData()
            data.append("file", pic)
            data.append("upload_preset", "realtime-chat-application")
            data.append("cloud_name", "dhiatzlib")
            fetch('https://api.cloudinary.com/v1_1/dhiatzlib/image/upload', {
                method: 'POST',
                body: data
            }).then(res => res.json())
                .then(data => {
                    setPicture(data.url.toString())
                    setLoading(false)
                })
        } else {
            toast.error('file type not supported');
            setLoading(false)
            return;
        }
    }


    // handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })
    }


    // update user info
    const handleUpdateUser = async (e) => {
        e.preventDefault()
        try {
            const { name, email, img } = info;
            const res = await axios.put(`${apiBaseUrl}/updateUserInfo`, {
                name,
                email,
                picture: picture || img
            })

            if (res.data.user) {
                localStorage.setItem("userInfo", JSON.stringify(res.data.user))
                dispatch({ type: 'userInfo', payload: res.data.user })
                toast.success(res.data.message)
            }

        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
    }

    // update user info
    const handleChangePassword = async (e) => {
        e.preventDefault()
        try {
            const { oldPassword, newPassword } = info;
            const res = await axios.put(`${apiBaseUrl}/changePassword`, {
                oldPassword,
                newPassword,
            })

            if (res.data.message) {
                toast.success(res.data.message)
            }

        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
    }





    return (
        <>
            <div class="text-sm breadcrumbs mt-5 ml-20">
                <ul>
                    <li>
                        <Link to="/">
                            <a className="text-primary font-bold">Home</a>
                        </Link>
                    </li>
                    <li className="font-semibold text-slate-600">Update User Information</li>
                </ul>
            </div>
            <div className="my-16">
                <div className="">
                    <h2 className="text-slate-500 font-bold text-2xl mb-10 ml-10 md:ml-32">Update User</h2>
                    <div className="md:mx-32  shadow-xl">

                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <form onSubmit={handleUpdateUser}>
                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder='name'
                                                        value={info.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder='email'
                                                        onChange={handleChange}
                                                        value={info.email}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* upload image */}
                                        <div className="flex items-center justify-center mt-4 px-4">
                                            <input
                                                type="text"
                                                name="img"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder='put image url or click below to upload'
                                                onChange={handleChange}
                                                value={info.img}
                                            />
                                        </div>
                                        <div className="flex items-center justify-center mt-4 px-4">
                                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col items-center justify-center pt-3 pb-2">
                                                    <UploadIcon />
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to new upload</span></p>
                                                </div>
                                                <input onChange={(e) => postPicture(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 pb-10">
                                        <button disabled={loading ? true : false} type="submit" className="disabled:cursor-not-allowed inline-flex w-full md:w-4/12 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">Update User</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* update password */}
                <div className="mt-10">
                    <h2 className="text-slate-500 font-bold text-2xl mb-10 ml-10 md:ml-32">Change Password</h2>
                    <div className="md:mx-32  shadow-xl">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <form onSubmit={handleChangePassword}>
                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <div className="flex flex-wrap items-center">
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="password"
                                                        name="oldPassword"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder='Old Password'
                                                        value={info.oldPassword}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="password"
                                                        name="newPassword"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder='New Password'
                                                        onChange={handleChange}
                                                        value={info.newPassword}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <button type="submit" className="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">Change Password</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateUserInfo;