import React, { useEffect, useState } from 'react';
import axios from "axios"
import { apiBaseUrl } from '../../utils/apiBaseUrl';
import { useDispatch, useSelector } from "react-redux"
import FriendList from './FriendList/FriendList';
import CurrentChat from './CurrentChat/CurrentChat';
import UserProfile from './UserProfile/UserProfile';



const Chat = () => {
    // redux
    const dispatch = useDispatch()

    // state
    const [search, setSearch] = useState("")


    // getFriends
    useEffect(() => {
        const getFriends = async () => {
            const res = await axios(`${apiBaseUrl}/get-friends?search=${search}`)
            dispatch({ type: 'getFriends', payload: res.data.user })
        }
        getFriends()
    }, [search])

    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-3 '>
                        {/* current chat with your friend */}
                        <CurrentChat />
                    </div>
                </div>

                {/* sidebar drawer */}
                <div class="drawer-side bg-slate-100">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class=" menu p-4 overflow-y-auto w-96 md:w-80 text-base-content">
                        {/* profile area */}
                        <UserProfile />

                        {/* Friend List Area */}
                        <FriendList
                            setSearch={setSearch}
                        />
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Chat;