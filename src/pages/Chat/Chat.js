import React, { useEffect, useState, useRef } from 'react';
import axios from "axios"
import { apiBaseUrl } from '../../utils/apiBaseUrl';
import { useDispatch, useSelector } from "react-redux"
import FriendList from './FriendList/FriendList';
import CurrentChat from './CurrentChat/CurrentChat';
import UserProfile from './UserProfile/UserProfile';
import { io } from "socket.io-client"
import { toast, ToastContainer } from 'react-toastify';
import useSound from "use-sound"
import notificationSound from "../../assets/sound/Message_Sound_Effect.mp3"
import sendingSound from "../../assets/sound/sending_message_sound.mp3"



const Chat = () => {
    // redux
    const dispatch = useDispatch()
    const { accessToken,userInfo } = useSelector(state => state.authReducer)
    const { friends,currentChat } = useSelector(state => state.chatReducer)

    // state
    const [search, setSearch] = useState("")
    const [newMessage, setNewMessage] = useState("")
    const [socketMsg, setSocketMsg] = useState("")
    const [friendMessagePath, setFriendMessagePath] = useState({})

    // sound
    const [notificationPlay] = useSound(notificationSound)
    const [sendingPlay] = useSound(sendingSound)


    // socket
    const socket = useRef()

    useEffect(() => {
        socket.current = io(apiBaseUrl, {
            withCredentials: true,
            extraHeaders: {
              "my-custom-header": "abcd"
            }
          });
        // send current user info to server
        socket.current.emit('addUser', userInfo._id, userInfo)
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
            sendingPlay()
            // send message to the socket server
            socket.current.emit('sendMessage', {
                userInfo: userInfo,
                senderId: userInfo._id,
                senderName: userInfo.name,
                receiverId: currentChat._id,
                message: {
                    text: newMessage,
                    image: ''
                },
                time: new Date()
            })

            // set empty socket typing status
            socket.current.emit('typingMessage', {
                senderId: userInfo._id,
                senderName: userInfo.name,
                receiverId: currentChat._id,
                message: ""
            })

            // set empty message field
            setNewMessage("")


        } catch (error) {
            console.log(error.response);
        }
    }


    // handle change message
    const handleChangeMessage = (e) => {
        const { value } = e.target;
        setNewMessage(value)

        // send typing status to socket server
        socket.current.emit('typingMessage', {
            senderId: userInfo._id,
            senderName: userInfo.name,
            receiverId: currentChat._id,
            message: value
        })
    }

    // handle emoji text
    const handleChangeEmoji = (emoji) => {
        setNewMessage(`${newMessage}${emoji}`)

        // send typing status to socket server
        socket.current.emit('typingMessage', {
            senderId: userInfo._id,
            senderName: userInfo.name,
            receiverId: currentChat._id,
            message: emoji
        })
    }


    useEffect(() => {
        // get active users from server
        socket.current.on('getUsers', (users) => {
            const filteredUsers = users.filter(user => user.userId !== userInfo._id)
            dispatch({ type: "activeUsers", payload: filteredUsers })
        })

        // get Messages from server
        socket.current.on('receiveMessage', (messages) => {
            setSocketMsg(messages)

            // send user information for notification path
            setFriendMessagePath(messages.userInfo)
        })

        // get user typing status
        socket.current.on('typingMessageStatus', (info) => {
            dispatch({ type: 'isTyping', payload: info })
        })
    }, [])


    // dispatch messages to redux
    useEffect(() => {
        if (socketMsg && currentChat) {
            if ((socketMsg.senderId === userInfo._id && socketMsg.receiverId === currentChat._id) || (socketMsg.senderId === currentChat._id && socketMsg.receiverId === userInfo._id)) {
                dispatch({ type: "socketMessage", payload: socketMsg })
            }
        }

        // set notification alert when chat with others friend
        if (socketMsg) {
            if ((socketMsg.receiverId === userInfo._id && socketMsg.senderId !== currentChat._id)) {
                // notification sound
                notificationPlay()

                // notification alert
                toast.success(`${socketMsg.senderName} sent you a message`)
            }
        }




        // set socket msg empty
        setSocketMsg("")

    }, [socketMsg])


    // getFriends from server
    useEffect(() => {
        const getFriends = async () => {
            const res = await axios(`${apiBaseUrl}/get-friends?search=${search}`)
            dispatch({ type: 'getFriends', payload: res.data.users })
        }
        getFriends()
    }, [search, dispatch])

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
                            handleChangeMessage={handleChangeMessage}
                            handleChangeEmoji={handleChangeEmoji}
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

            {/* click on notification message to chat with sender friend */}
            <span onClick={() => dispatch({ type: 'currentChat', payload: friendMessagePath })}>
                <ToastContainer />
            </span>
        </div >
    );
};

export default Chat;