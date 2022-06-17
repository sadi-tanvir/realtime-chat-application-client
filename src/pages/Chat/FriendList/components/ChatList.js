import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatItem from '../components/ChatItem';



const ChatList = () => {
    const dispatch = useDispatch()
    const { friends, currentChat,activeUsers } = useSelector(state => state.chatReducer)


    useEffect(() => {
        if (friends && friends.length > 0) {
            dispatch({ type: 'currentChat', payload: friends[0] })
        }
    }, [friends])


    return (
        <>
            {/* Chat History */}
            <div className=" mt-5">
                {
                    friends.map(friend => <ChatItem
                        onClick={() => dispatch({ type: 'currentChat', payload: friend })}
                        key={friend._id}
                        img={friend.picture}
                        name={friend.name}
                        divClass={currentChat._id === friend._id ? 'bg-teal-400' : 'bg-white'}
                        currentText={currentChat._id === friend._id ? 'text-white' : 'text-slate-500'}
                        status={activeUsers.some(user => user.userId === friend._id) ? 'online' : 'offline'}
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