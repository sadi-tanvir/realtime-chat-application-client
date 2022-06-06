import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom'
import UserIcon,{EmailIcon,PasswordIcon} from '../../shared/re-usable-components/Icon';
import FileUpload from './FileUpload';



const Register = () => {
    return (
        <div>

            <div class="min-h-screen flex justify-center items-center py-20">
                <div class="flex w-full lg:w-7/12 justify-center items-center bg-white space-y-8">
                    <div class="w-full px-8 md:px-32 lg:px-24">
                        <form class="bg-white rounded-md shadow-2xl px-8 py-10   rounded-xl">
                            <h1 class="text-gray-800 font-bold text-2xl mb-1 text-center text-primary">Please Register!</h1>
                            <p class="text-sm font-normal text-gray-600 mb-8  text-center">Welcome to come here</p>
                            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <UserIcon />
                                <input id="text" class=" pl-2 w-full outline-none border-none" type="text" name="name" placeholder="Name" />
                            </div>
                            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <EmailIcon />
                                <input id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" />
                            </div>
                            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <PasswordIcon />
                                <input class="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Password" />
                            </div>
                            <FileUpload />
                            <button type="submit" class="block w-full bg-primary mt-5 py-2 rounded-2xl hover:bg-primary hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Register</button>
                            <div class="flex justify-between mt-4">
                                <Link to="/login" class="text-sm ml-2 hover:primary cursor-pointer hover:-translate-y-1 duration-500 transition-all">Already have an account?</Link>
                            </div>
                            <div class="divider">OR</div>
                            {/* social login */}
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;