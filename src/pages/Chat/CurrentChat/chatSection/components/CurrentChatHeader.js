import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../../../../shared/re-usable-components/Avatar';
import { CallIcon, VideoIcon } from '../../../../shared/re-usable-components/Icon';

const CurrentChatHeader = () => {
    const { currentChat } = useSelector(state => state.chatReducer)

    return (
        <div>
            <div className="flex justify-between items-center px-3 mt-3">
                <div className="flex justify-center items-center">
                    <Avatar
                        img="https://api.lorem.space/image/face?hash=28212"
                        status="online"
                        size="w-9"
                    />
                    <h1 className="text-lg font-bold text-slate-500 ml-1 capitalize">
                        {currentChat.name}
                    </h1>
                </div>
                <div className="flex justify-center items-center">
                    <CallIcon />
                    <VideoIcon iconClass="ml-1" />
                </div>
            </div>
        </div>
    );
};

export default CurrentChatHeader;