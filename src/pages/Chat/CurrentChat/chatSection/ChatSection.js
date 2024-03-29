import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CurrentChatHeader from './components/CurrentChatHeader';
import Message from './components/Message';
import SendMessageArea from './components/SendMessageArea';
import { apiBaseUrl } from "../../../../utils/apiBaseUrl"
import axios from 'axios'
import ReactScrollToBottom from "react-scroll-to-bottom"

const ChatSection = ({ newMessage, setNewMessage, handleSendMessage, handleChangeMessage,handleChangeEmoji }) => {
    // redux
    const { userInfo } = useSelector(state => state.authReducer)
    const { currentChat } = useSelector(state => state.chatReducer)
    const dispatch = useDispatch()


    

    // handle Image Send
    const handleSendImage = async (e) => {
        const file = e.target.files[0]
        // const imageName = `${Date.now()}${file.name}`
        const formData = new FormData()
        formData.append('message-image', file)
        formData.append('senderName', userInfo.name)
        formData.append('receiverId', currentChat._id)
        const res = await axios.post(`${apiBaseUrl}/sendImageMessage`, formData)
        console.log(res.data);
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

                        {/* message area */}
                        <ReactScrollToBottom className="h-[80%] box-border ">
                            <Message />
                        </ReactScrollToBottom>

                        {/* send message area */}
                        <SendMessageArea
                            newMessage={newMessage}
                            setNewMessage={setNewMessage}
                            handleSendMessage={handleSendMessage}
                            handleChangeEmoji={handleChangeEmoji}
                            handleSendImage={handleSendImage}
                            handleChangeMessage={handleChangeMessage}
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