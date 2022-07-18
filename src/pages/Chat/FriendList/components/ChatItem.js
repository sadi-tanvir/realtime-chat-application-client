import React from 'react';
import Avatar from '../../../shared/re-usable-components/Avatar';



const ChatItem = ({ img, name, lastMessage, divClass, currentText, status, onClick, msgTime }) => {
    return (
        <>
            <div onClick={onClick} className={`flex justify-start items-center cursor-pointer py-2 px-2 my-2 active:scale-105 transition-all rounded-md ${divClass}`}>
                <Avatar
                    img={img}
                    status={status}
                    size="w-9"
                    divClass="mr-2"
                />
                <div className="flex flex-col justify-center items-start">

                    <h1 className={`text-lg font-bold capitalize ${currentText}`}>
                        {name}
                    </h1>
                    <small className={`${currentText}`}>{lastMessage}</small>
                    <small>{msgTime}</small>
                </div>

                <Avatar
                    img={img}
                    // status={status}
                    size="w-4"
                    divClass="ml-auto"
                />
                {/* <div className="w-2 h-2 bg-teal-500 ml-auto rounded-full">
                </div> */}
            </div>
        </>
    );
};

export default ChatItem;