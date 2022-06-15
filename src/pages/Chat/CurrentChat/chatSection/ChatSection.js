import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CurrentChatHeader from './components/CurrentChatHeader';
import Message from './components/Message';
import SendMessageArea from './components/SendMessageArea';
import { apiBaseUrl } from "../../../../utils/apiBaseUrl"
import axios from 'axios'
import ReactScrollToBottom from "react-scroll-to-bottom"

const ChatSection = () => {
    // redux
    const { userInfo } = useSelector(state => state.authReducer)
    const { currentChat } = useSelector(state => state.chatReducer)
    const dispatch = useDispatch()
    // state
    const [newMessage, setNewMessage] = useState("")


    const handleSendMessage = async () => {
        try {
            // send request to the server
            const res = await axios.post(`${apiBaseUrl}/sendMessage`, {
                senderName: userInfo.name,
                receiverId: currentChat._id,
                message: newMessage
            })
            console.log(res.data);

            // set empty message field
            setNewMessage("")

        } catch (error) {
            console.log(error.response);
        }
    }


    // get messages from server
    useEffect(() => {
        const getMessages = async () => {
            const res = await axios.get(`${apiBaseUrl}/getMessages/${currentChat._id}`)
            dispatch({ type: 'getMessages', payload: res.data.messages })
        }
        getMessages()
    }, [currentChat._id, dispatch])


    return (
        <>
            {
                currentChat.name ?
                    <div className="col-span-2 relative h-screen">
                        {/* friend's chat Header */}
                        <CurrentChatHeader />
                        <ReactScrollToBottom className="h-[80%] box-border ">
                            {/* message area */}
                            <Message />
                        </ReactScrollToBottom>

                        {/* send message area */}
                        <SendMessageArea
                            setNewMessage={setNewMessage}
                            newMessage={newMessage}
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