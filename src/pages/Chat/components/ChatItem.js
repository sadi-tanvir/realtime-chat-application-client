import React from 'react';
import Avatar from '../../shared/re-usable-components/Avatar';



const ChatItem = ({ img, name, currentBG,currentText, status }) => {
    return (
        <>
            <div className={`flex justify-start items-center py-2 px-2 rounded-md ${currentBG}`}>
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