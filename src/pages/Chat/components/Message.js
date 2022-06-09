import React from 'react';
import Avatar from '../../shared/re-usable-components/Avatar';




const Message = () => {
    return (
        <div className="mt-8">
            {/* Friend message */}
            <div className="flex flex-col justify-start items-start ml-2 mt-3">
                <div className="flex justify-center items-center">
                    <Avatar
                        img="https://api.lorem.space/image/face?hash=28212"
                        status="online"
                        size="w-7"
                    />
                    <p className="ml-1 py-1 px-2 rounded bg-primary text-teal-800 font-semibold">hi how are you</p>
                </div>
                <small className="ml-8 font-semibold">10 Jun 2022</small>
            </div>

            {/* My message */}
            <div className="flex flex-col justify-start items-end mr-2 mt-3">
                <div className="flex justify-center items-center">
                    <Avatar
                        img="https://api.lorem.space/image/face?hash=28212"
                        status="online"
                        size="w-7"
                    />
                    <p className="ml-1 py-1 px-2 rounded bg-slate-300 font-semibold">I am fine what about you</p>
                    <img src="https://ibb.co/rb1TfBg" alt="" />
                </div>
                    <small className="font-semibold">10 Jun 2022</small>
            </div>
        </div>
    );
};

export default Message;