import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CurrentChatHeader from './components/CurrentChatHeader';
import Message from './components/Message';
import SendMessageArea from './components/SendMessageArea';
import {apiBaseUrl} from "../../../../utils/apiBaseUrl"
import axios from 'axios'

const ChatSection = () => {
    // redux
    const { userInfo } = useSelector(state => state.authReducer)
    const { currentChat } = useSelector(state => state.chatReducer)

    // state
    const [newMessage, setNewMessage] = useState("")


    const handleSendMessage = async () => {
        try {
            const data = {
                senderName: userInfo.name,
                receiverId: currentChat._id,
                message: newMessage
            }

            const res = await axios.post(`${apiBaseUrl}/sendMessage`, data)
            console.log(res.data);

            

        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <>
            {
                currentChat.name ?
                    <div className="col-span-2 relative">
                        {/* friend's chat Header */}
                        <CurrentChatHeader />

                        {/* message area */}
                        <Message />

                        {/* send message area */}
                        <SendMessageArea
                            setNewMessage={setNewMessage}
                            handleSendMessage={handleSendMessage}
                        />
                    </div> :
                    <div className="col-span-2 relative">
                        <div className="min-h-screen flex flex-col items-center justify-center">
                            <h1 className="text-3xl text-center font-bold text-slate-700">Select a friend to chat</h1>
                        </div>
                    </div>
            }

        </>
    );
};

export default ChatSection;