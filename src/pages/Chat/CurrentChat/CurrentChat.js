import React from 'react';
import ChatSection from './chatSection/ChatSection';
import ChatInfoSection from './InfoSection/ChatInfoSection';



const CurrentChat = ({ newMessage, setNewMessage, handleSendMessage }) => {

    return (
        <>
            <ChatSection
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                handleSendMessage={handleSendMessage}
            />
            <ChatInfoSection />
        </>
    );
};

export default CurrentChat;