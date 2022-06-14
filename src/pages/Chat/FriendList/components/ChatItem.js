import React from 'react';
import Avatar from '../../../shared/re-usable-components/Avatar';



const ChatItem = ({ img, name, divClass,currentText, status, onClick }) => {
    return (
        <>
            <div onClick={onClick}  className={`flex justify-start items-center cursor-pointer py-2 px-2 my-2 active:scale-105 transition-all rounded-md ${divClass}`}>
                <Avatar
                    img={img}
                    status={status}
                    size="w-9"
                />
                <h1 className={`text-lg font-bold ml-2 capitalize ${currentText}`}>
                    {name}
                </h1>
            </div>
        </>
    );
};

export default ChatItem;