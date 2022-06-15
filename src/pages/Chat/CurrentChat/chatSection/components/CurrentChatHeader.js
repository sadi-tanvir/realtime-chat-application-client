import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../../../../shared/re-usable-components/Avatar';
import { CallIcon, VideoIcon } from '../../../../shared/re-usable-components/Icon';

const CurrentChatHeader = () => {
    const { currentChat } = useSelector(state => state.chatReducer)

    return (
        <>
            <div className="flex justify-between items-center px-3 h-[8%]">
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
                    <label for="my-drawer-2" class=" bg-slate-400 p-2 rounded-full ml-1 swap swap-rotate md:hidden">
                        {/* <!-- this hidden checkbox controls the state --> */}
                        <input type="checkbox" class="" />
                        {/* <!-- hamburger icon --> */}
                        <svg class="swap-off fill-current  w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                        {/* <!-- close icon --> */}
                        <svg class="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                    </label>
                </div>
            </div>
        </>
    );
};

export default CurrentChatHeader;