import React, { useEffect, useState, useRef } from 'react';
import axios from "axios"
import { apiBaseUrl } from '../../utils/apiBaseUrl';
import { useDispatch, useSelector } from "react-redux"
import FriendList from './FriendList/FriendList';
import CurrentChat from './CurrentChat/CurrentChat';
import UserProfile from './UserProfile/UserProfile';
import { io } from "socket.io-client"



const Chat = () => {
    // redux
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.authReducer)
    const { currentChat } = useSelector(state => state.chatReducer)

    // state
    const [search, setSearch] = useState("")
    const [newMessage, setNewMessage] = useState("")
    const [socketMsg, setSocketMsg] = useState("")


    // socket
    const socket = useRef()

    useEffect(() => {
        socket.current = io('ws://localhost:8000')

    }, [])


    // handle send message
    const handleSendMessage = async () => {
        try {
            // send request to the server
            const res = await axios.post(`${apiBaseUrl}/sendMessage`, {
                senderName: userInfo.name,
                receiverId: currentChat._id,
                message: newMessage
            })
            // console.log(res.data);

            // send message to the socket server
            socket.current.emit('sendMessage', {
                senderId: userInfo._id,
                senderName: userInfo.name,
                receiverId: currentChat._id,
                message: {
                    text: newMessage,
                    image: ''
                },
                time: new Date()
            })

            // set empty message field
            setNewMessage("")

        } catch (error) {
            console.log(error.response);
        }
    }


    useEffect(() => {
        // send current user info to server
        socket.current.emit('addUser', userInfo._id, userInfo)

        // get active users from server
        socket.current.on('getUsers', (users) => {
            const filteredUsers = users.filter(user => user.userId !== userInfo._id)
            dispatch({ type: "activeUsers", payload: filteredUsers })
        })

        // get Messages from server
        socket.current.on('receiveMessage', (messages) => {
            setSocketMsg(messages)
        })
    }, [])


    // dispatch messages to redux
    useEffect(() => {
        if (socketMsg) {
            dispatch({ type: "socketMessage", payload: socketMsg })
        }
        setSocketMsg("")

    }, [socketMsg])


    // getFriends
    useEffect(() => {
        const getFriends = async () => {
            const res = await axios(`${apiBaseUrl}/get-friends?search=${search}`)
            dispatch({ type: 'getFriends', payload: res.data.user })
        }
        getFriends()
    }, [search])

    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-3 '>
                        {/* current chat with your friend */}
                        <CurrentChat
                            newMessage={newMessage}
                            setNewMessage={setNewMessage}
                            handleSendMessage={handleSendMessage}
                        />
                    </div>
                </div>

                {/* sidebar drawer */}
                <div class="drawer-side bg-slate-100">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class=" menu p-4 overflow-y-auto w-96 md:w-80 text-base-content">
                        {/* profile area */}
                        <UserProfile />

                        {/* Friend List Area */}
                        <FriendList
                            setSearch={setSearch}
                        />
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Chat;