import React from 'react';
import Avatar from '../../shared/re-usable-components/Avatar';
import ChatItem from './ChatItem';

const ActiveFriendList = () => {
    return (
        <>
            {/* active Friends */}
            <div className="mt-5">
                <Avatar
                    img="https://api.lorem.space/image/face?hash=28212"
                    status="online"
                    divClass=""
                />
                <Avatar
                    img="https://api.lorem.space/image/face?hash=28212"
                    status="online"
                    divClass="ml-1"
                />
            </div>
        </>
    );
};

export default ActiveFriendList;