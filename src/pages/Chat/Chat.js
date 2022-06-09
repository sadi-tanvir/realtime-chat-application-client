import React, { useEffect } from 'react';
import axios from "axios"
import { apiBaseUrl } from '../../utils/apiBaseUrl';
import { CallIcon, DotIcon, EditIcon, VideoIcon } from "../shared/re-usable-components/Icon"
import ChatItem from './components/ChatItem';
import Avatar from '../shared/re-usable-components/Avatar';
import ActiveFriendList from './components/ActiveFriendList';
import ChatHistory from './components/ChatHistory';




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
                        {/* profile area */}
                        <div className="flex justify-between items-center">
                            <div className="flex justify-center items-center">
                                <Avatar
                                    img="https://api.lorem.space/image/face?hash=28212"
                                    status="online"
                                />
                                <h1 className="text-lg font-bold text-red-500 ml-1 capitalize">tanvir sadi</h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <DotIcon />
                                <EditIcon iconClass="ml-1" />
                            </div>
                        </div>

                        {/* chat area */}
                        <div>
                            {/* search friends */}
                            <div className="mt-5">
                                <div class="flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
                                    <input type="search" class="w-full px-4 py-2 text-gray-800 rounded-full focus:outline-none" placeholder="search" x-model="search" />
                                </div>
                            </div>

                            {/* Active Friend List */}
                            <ActiveFriendList />

                            {/* Chat History */}
                            <ChatHistory />
                        </div>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Chat;