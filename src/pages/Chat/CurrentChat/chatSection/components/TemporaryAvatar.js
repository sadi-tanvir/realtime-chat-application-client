import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../../../../shared/re-usable-components/Avatar';
import moment from "moment"

const TemporaryAvatar = () => {
    // redux
    const { currentChat, activeUsers } = useSelector(state => state.chatReducer)


    const isUserActive = activeUsers.some(user => user.userId === currentChat._id)

    return (
        <div>
            <div className="col-span-1 text-center py-16">
                <Avatar
                    img={currentChat.picture}
                    status={isUserActive ? 'online' : 'offline'}
                    size="w-16"
                />
                <h5 className={`${isUserActive ? "text-teal-500" : "text-red-400"} font-bold`}>
                    {isUserActive ? 'Online' : 'Offline'}
                </h5>
                <h1 className="text-xl font-bold text-slate-500 ml-1 capitalize">
                    {currentChat.name}
                </h1>
                <small>
                    {
                        `${currentChat.name} Connected with you ${moment(currentChat.createdAt).startOf('mini').fromNow()}`
                    }
                </small>
            </div>
        </div>
    );
};

export default TemporaryAvatar;