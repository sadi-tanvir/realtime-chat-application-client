import React from 'react';
import ChatItem from './ChatItem';



const ChatHistory = () => {
    return (
        <>
            {/* Chat History */}
            <div className=" mt-5">
                <ChatItem
                    img="https://api.lorem.space/image/face?hash=28212"
                    name="sadi hossain"
                    currentBG="bg-teal-400"
                    currentText="text-white"
                    status="online"
                />
                <ChatItem
                    img="https://api.lorem.space/image/face?hash=28212"
                    name="tanvir hossain"
                    currentText="text-slate-500"
                    status="offline"
                />
            </div>
        </>
    );
};

export default ChatHistory;