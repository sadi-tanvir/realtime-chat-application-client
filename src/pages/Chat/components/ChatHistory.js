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
                    current="bg-slate-300"
                    status="online"
                />
                <ChatItem
                    img="https://api.lorem.space/image/face?hash=28212"
                    name="tanvir hossain"
                    status="offline"
                />
            </div>
        </>
    );
};

export default ChatHistory;