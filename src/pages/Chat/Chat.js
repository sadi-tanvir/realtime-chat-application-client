import React, { useEffect } from 'react';
import axios from "axios"
import { apiBaseUrl } from '../../utils/apiBaseUrl';
import { CallIcon, DotIcon, EditIcon, VideoIcon } from "../shared/re-usable-components/Icon"
import ChatItem from './components/ChatItem';
import Avatar from '../shared/re-usable-components/Avatar';




const Chat = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-3 '>
                        <div className="col-span-2 relative">
                            
                        </div>
                        <div className="bg-slate-200 col-span-1">

                        </div>
                    </div>
                </div>

                {/* sidebar drawer */}
                <div class="drawer-side bg-slate-100">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class=" menu p-4 overflow-y-auto w-96 md:w-80 text-base-content">
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Chat;