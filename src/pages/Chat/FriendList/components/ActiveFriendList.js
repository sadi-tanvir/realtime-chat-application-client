import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../../shared/re-usable-components/Avatar';



const ActiveFriendList = () => {
    // redux
    const dispatch = useDispatch()
    const { activeUsers } = useSelector(state => state.chatReducer)
    return (
        <>
            <div className="mt-5">
        {
            activeUsers.map(user => <Avatar
                img={user.userInfo.picture}
                status="online"
                divClass="ml-1 cursor-pointer active:scale-105 transition-all"
                size="w-9"
                onClick={() => dispatch({ type: 'currentChat', payload: user.userInfo })}
            />)
        }
            
            </div>
        </>
    );
};

export default ActiveFriendList;