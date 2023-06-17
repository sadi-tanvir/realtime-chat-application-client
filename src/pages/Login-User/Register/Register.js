import React, { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom'
import UserIcon, { EmailIcon, PasswordIcon, UploadIcon } from '../../shared/re-usable-components/Icon';
import { toast } from "react-toastify"
import axios from 'axios';
import { apiBaseUrl } from '../../../utils/apiBaseUrl';
import { useDispatch, useSelector } from "react-redux"
import setAuthToken from '../../../utils/setAuthToken';



const Register = () => {
    // react redux
    const dispatch = useDispatch()
    const state = useSelector(state => state.authReducer)
    console.log(state);
    const [info, setInfo] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [picture, setPicture] = useState("")
    const [loading, setLoading] = useState(false)



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

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { name, email, password } = info;
            const res = await axios.post(`${apiBaseUrl}/register`, { name, email, password, picture })
            if (res.data.user) {
                localStorage.setItem("userInfo", JSON.stringify(res.data.user))
                localStorage.setItem("accessToken", JSON.stringify(res.data.token))
                dispatch({ type: 'loginUser' })
                dispatch({ type: 'userInfo', payload: res.data.user })
                dispatch({ type: "accessToken", payload: res.data.token })
                setAuthToken(res.data.token)
            }
            if (res.data.message) {
                toast.success(res.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div>

            <div class="min-h-screen flex justify-center items-center py-20">
                <div class="flex w-full lg:w-7/12 justify-center items-center bg-white space-y-8">
                    <div class="w-full px-8 md:px-32 lg:px-24">
                        <form onSubmit={handleSubmit} class="bg-white rounded-md shadow-2xl px-8 py-10   rounded-xl">
                            <h1 class="text-gray-800 font-bold text-2xl mb-1 text-center text-primary">Please Register!</h1>
                            <p class="text-sm font-normal text-gray-600 mb-8  text-center">Welcome to come here</p>

                            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <UserIcon />
                                <input onChange={handleChange} id="name" class=" pl-2 w-full outline-none border-none" type="text" name="name" placeholder="Name" />
                            </div>

                            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <EmailIcon />
                                <input onChange={handleChange} id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" />
                            </div>

                            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <PasswordIcon />
                                <input onChange={handleChange} class="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Password" />
                            </div>

                            <div class="flex items-center justify-center">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-3 pb-2">
                                        <UploadIcon />
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    </div>
                                    <input onChange={(e) => postPicture(e.target.files[0])} id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>
                            <button disabled={loading ? true : false} type="submit" class="block w-full bg-primary mt-5 py-2 rounded-2xl hover:bg-primary hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Register</button>
                            <div class="flex justify-between mt-4">
                                <Link to="/login" class="text-sm ml-2 hover:primary cursor-pointer hover:-translate-y-1 duration-500 transition-all">Already have an account?</Link>
                            </div>
                            {/* <div class="divider">OR</div> */}
                            {/* social login */}
                            {/* <SocialLogin /> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;