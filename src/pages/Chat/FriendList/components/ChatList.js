import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageIcon } from '../../../shared/re-usable-components/Icon';
import ChatItem from '../components/ChatItem';
import moment from "moment"


const ChatList = () => {
    const dispatch = useDispatch()
    const { friends, currentChat, activeUsers } = useSelector(state => state.chatReducer)
    const { userInfo } = useSelector(state => state.authReducer)


    useEffect(() => {
        if (friends && friends.length > 0) {
            dispatch({ type: 'currentChat', payload: friends[0].friendInfo })
        }
    }, [friends])



    return (
        <>
            {/* Chat History */}
            <div className=" mt-5">
                {
                    friends.map(friend => <ChatItem
                        onClick={() => dispatch({ type: 'currentChat', payload: friend.friendInfo })}
                        key={friend.friendInfo._id}
                        img={friend.friendInfo.picture}
                        name={friend.friendInfo.name}
                        lastMessage={
                            friend?.lastMsg ?
                                friend?.lastMsg?.senderId === userInfo._id ?
                                    `you: ${friend?.lastMsg?.message.text || 'sent a Attachment'}` :
                                    friend?.lastMsg?.message.text || `${friend?.friendInfo?.name.split(" ")[0]} sent you a Attachment`
                                : `you are connected with ${friend?.friendInfo?.name.split(" ")[0]}`
                        }
                        divClass={currentChat._id === friend.friendInfo._id ? 'bg-teal-400' : 'bg-white'}
                        currentText={currentChat._id === friend.friendInfo._id ? 'text-white' : 'text-slate-500'}
                        status={activeUsers.some(user => user.userId === friend.friendInfo._id) ? 'online' : 'offline'}
                        msgTime={friend?.lastMsg ? moment(friend?.lastMsg?.createdAt).startOf('mini').fromNow() : ''}
                    />)
                }

                {/* <ChatItem
                    img="https://api.lorem.space/image/face?hash=28212"
                    name="tanvir hossain"
                    currentText="text-slate-500"
                    status=""
                /> */}
            </div>
        </>
    );
};

export default ChatList;