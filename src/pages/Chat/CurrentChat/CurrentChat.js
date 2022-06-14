import React from 'react';
import { useSelector } from 'react-redux';
import ChatSection from './chatSection/ChatSection';
import ChatInfoSection from './InfoSection/ChatInfoSection';



const CurrentChat = () => {
    const { currentChat } = useSelector(state => state.chatReducer)

    return (
        <>
            <ChatSection />
            <ChatInfoSection />
        </>
    );
};

export default CurrentChat;