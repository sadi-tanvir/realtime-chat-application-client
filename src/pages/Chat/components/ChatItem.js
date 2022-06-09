import React from 'react';
import Avatar from '../../shared/re-usable-components/Avatar';



const ChatItem = ({ img, name, current, status }) => {
    return (
        <>
            <div className={`flex justify-start items-center py-2 px-2 rounded-md ${current}`}>
                <Avatar
                    img={img}
                    status={status}
                />
                <h1 className="text-lg font-bold text-slate-500 ml-2 capitalize">
                    {name}
                </h1>
            </div>
        </>
    );
};

export default ChatItem;