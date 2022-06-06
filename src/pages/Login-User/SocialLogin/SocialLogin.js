import React from 'react';
import { GoogleIcon, GithubIcon, FacebookIcon } from '../../shared/re-usable-components/Icon';

const SocialLogin = () => {
    return (
        <div>
            {/* <!-- component --> */}

            <div class=" grid space-y-4">
                <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-primary active:bg-primary">
                    <div class="relative flex items-center space-x-4 justify-center">
                        <GoogleIcon />
                        <span class="block w-max font-semibold tracking-wide text-primary text-sm transition duration-300 sm:text-base group-active:text-white">Continue with Google</span>
                    </div>
                </button>
                <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:primary focus:primary active:bg-primary active:text-white">
                    <div class="relative flex items-center space-x-4 justify-center">
                        <GithubIcon />
                        <span class="block w-max font-semibold tracking-wide text-primary text-sm transition duration-300 sm:text-base group-active:text-white">Continue with Github</span>
                    </div>
                </button>
                <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 active:bg-primary">
                    <div class="relative flex items-center space-x-4 justify-center">
                        <FacebookIcon />
                        <span class="block w-max font-semibold tracking-wide text-primary text-sm transition duration-300 sm:text-base group-active:text-white">Continue with Facebook</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;