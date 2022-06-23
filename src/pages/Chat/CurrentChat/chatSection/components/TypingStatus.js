import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../../../../shared/re-usable-components/Avatar';

const TypingStatus = () => {

    // redux
    const { currentChat, activeUsers } = useSelector(state => state.chatReducer)


    const isUserActive = activeUsers.some(user => user.userId === currentChat._id)

    return (
        <>
            <div className="flex flex-col justify-start items-start ml-2 mt-3">
                <div className="flex justify-center items-center">
                    <Avatar
                        img={currentChat.picture}
                        status={isUserActive ? 'online' : 'offline'}
                        size="w-7"
                    />

                    <p className="ml-1 py-1 px-2 rounded bg-teal-300 text-slate-600 font-semibold">
                        typing....
                    </p>
                </div>
                <small className="ml-8 font-semibold text-slate-600">10 Jun 2022</small>
            </div>
        </>
    );
};

export default TypingStatus;