import React from 'react';
import { UploadIcon } from '../../shared/re-usable-components/Icon';

const FileUpload = () => {
    return (
        <div className="">


            <div class="flex items-center justify-center">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-3 pb-2">
                        <UploadIcon />
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>

            {/* <p class="mt-5">This file input component is part of a larger, open-source library of Tailwind CSS components. Learn
                more
                by going to the official <a class="text-blue-600 hover:underline"
                    href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.
            </p>
            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script> */}
        </div>
    );
};

export default FileUpload;