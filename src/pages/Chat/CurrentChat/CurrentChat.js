import React from 'react';
import ChatSection from './chatSection/ChatSection';
import ChatInfoSection from './InfoSection/ChatInfoSection';



const CurrentChat = ({ newMessage, setNewMessage, handleSendMessage,handleChangeMessage }) => {

    return (
        <>
            <ChatSection
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                handleSendMessage={handleSendMessage}
                handleChangeMessage={handleChangeMessage}
            />
            <ChatInfoSection />
        </>
    );
};

export default CurrentChat;