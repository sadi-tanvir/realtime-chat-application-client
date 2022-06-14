import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../../shared/re-usable-components/Avatar';
import { DotIcon, EditIcon } from '../../shared/re-usable-components/Icon';

const UserProfile = () => {
    // redux
    const { userInfo } = useSelector(state => state.authReducer)

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center">
                    <Avatar
                        img="https://api.lorem.space/image/face?hash=28212"
                        status="online"
                        size="w-9"
                    />
                    <h1 className="text-lg font-bold text-slate-500 ml-1 capitalize">{userInfo.name}</h1>
                </div>
                <div className="flex justify-center items-center">
                    <DotIcon />
                    <EditIcon iconClass="ml-1" />
                </div>
            </div>
        </>
    );
};

export default UserProfile;