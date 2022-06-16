import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../../../shared/re-usable-components/Avatar';



const ActiveFriendList = () => {
    const { activeUsers } = useSelector(state => state.chatReducer)
    return (
        <>
            <div className="mt-5">
        {
            activeUsers.map(user => <Avatar
                img="https://api.lorem.space/image/face?hash=28212"
                status="online"
                divClass="ml-1"
                size="w-9"
            />)
        }
            
            </div>
        </>
    );
};

export default ActiveFriendList;