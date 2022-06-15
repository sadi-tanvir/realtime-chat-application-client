import React from 'react';
import { useSelector } from 'react-redux';
import ActiveFriendList from './components/ActiveFriendList';
import ChatList from './components/ChatList';



const FriendList = ({ setSearch }) => {

    return (
        <div className="mt-5">
            {/* search friends */}
            <div class="flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
                <input onChange={(e) => setSearch(e.target.value)} type="search" class="w-full px-4 py-2 text-gray-800 rounded-full focus:outline-none" placeholder="search" x-model="search" />
            </div>
            {/* Active Friend List */}
            <ActiveFriendList />
            {/* Chat History */}
            <ChatList />
        </div>
    );
};

export default FriendList;