import React, { useState } from 'react';
import { AttachIcon, EmojiIcon, SendIcon } from '../../../../shared/re-usable-components/Icon';

const SendMessageArea = ({ newMessage, handleSendMessage, handleSendEmoji, handleSendImage,handleChangeMessage }) => {
    // state
    const [showEmoji, setShowEmoji] = useState(false)

    // emoji
    const emojiList = [
        "😜", "😙", "😘", "✌", "😭", "😷", "😳", "😂", "😢", "🎁", "💝", "👌", "👍", "👋", "🔥", "⚠", "⚽", "🚭", "🔕", "🔇",
    ]

   



    return (
        <>
            <div className="absolute bottom-0 w-full h-[12%]">
                <form onSubmit={(e) => handleSendMessage(e.preventDefault())}>
                    <label for="chat" class="sr-only">Your message</label>
                    <div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                        {/* file upload */}
                        <label class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <AttachIcon />
                            <input onChange={handleSendImage} type='file' formEncType='multipart/form-data' class="hidden" />
                        </label>

                        {/* emoji */}
                        <div class="dropdown dropdown-top mr-1">
                            <label onClick={() => setShowEmoji(!showEmoji)} tabindex="0" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"><EmojiIcon /></label>
                            <div tabindex="0" class={`${showEmoji ? "block" : "hidden"} dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40`}>
                                <div className="grid grid-cols-5">
                                    {
                                        emojiList.map(item =>
                                            <span onClick={() => handleSendEmoji(item)} className='cursor-pointer'>{item}</span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <input
                            onChange={handleChangeMessage}
                            value={newMessage}
                            type="text"
                            placeholder="Type Your Message"
                            class="input input-bordered w-full"
                        />
                        <button type="submit" class="inline-flex justify-center rounded-full cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600">
                            <SendIcon iconClass="ml-2" />
                        </button>

                    </div>
                </form>
            </div>
        </>
    );
};

export default SendMessageArea;