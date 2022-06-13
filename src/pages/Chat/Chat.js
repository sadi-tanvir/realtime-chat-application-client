import React, { useEffect, useState } from 'react';
import axios from "axios"
import { apiBaseUrl } from '../../utils/apiBaseUrl';
import { AttachIcon, CallIcon, DotIcon, EditIcon, EmojiIcon, SendIcon, VideoIcon } from "../shared/re-usable-components/Icon"
import ChatItem from './components/ChatItem';
import Avatar from '../shared/re-usable-components/Avatar';
import ActiveFriendList from './components/ActiveFriendList';
import ChatHistory from './components/ChatHistory';
import Collapse from '../shared/re-usable-components/Collapse';
import Message from './components/Message';
import { useDispatch, useSelector } from "react-redux"



const Chat = () => {
    // redux
    const dispatch = useDispatch()
    const {friends} = useSelector(state => state.friendsReducer)
    console.log(`from chat reducer`,friends);

    // state
    const [search, setSearch] = useState("")
    const [showEmoji, setShowEmoji] = useState(false)
    const [textMsg, setTextMsg] = useState({
        msg: "",
        emoji: ""
    })
    console.log(showEmoji);
    const emojiList = [
        "😜", "😙", "😘", "✌", "😭", "😷", "😳", "😂", "😢", "🎁", "💝", "👌", "👍", "👋", "🔥", "⚠", "⚽", "🚭", "🔕", "🔇",
    ]
    // handle emoji text
    const handleEmoji = (e) => {
        console.log(e.target.value);
        const emoji = e.target.value;
        setTextMsg({ ...textMsg, ...emoji })
    }

    // handle message input
    const handleChange = (e) => {
        const msg = e.target.value;
        setTextMsg({ ...textMsg, msg })
    }


    // getFriends
    useEffect(() => {
        const getFriends = async () => {
            const res = await axios(`${apiBaseUrl}/get-friends?search=${search}`)
            console.log(res.data.user);
            dispatch({ type: 'getFriends', payload: res.data.user })
        }
        getFriends()
    }, [search])

    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-3 '>
                        <div className="col-span-2 relative">
                            {/* friend's chat profile */}
                            <div className="flex justify-between items-center px-3 mt-3">
                                <div className="flex justify-center items-center">
                                    <Avatar
                                        img="https://api.lorem.space/image/face?hash=28212"
                                        status="online"
                                        size="w-9"
                                    />
                                    <h1 className="text-lg font-bold text-slate-500 ml-1 capitalize">
                                        tanvir sadi
                                    </h1>
                                </div>
                                <div className="flex justify-center items-center">
                                    <CallIcon />
                                    <VideoIcon iconClass="ml-1" />
                                </div>
                            </div>

                            {/* message area */}
                            <Message />

                            {/* send message area */}
                            <div className="absolute bottom-0 w-full">
                                <form>
                                    <label for="chat" class="sr-only">Your message</label>
                                    <div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                                        <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <AttachIcon />
                                        </button>

                                        <div class="dropdown dropdown-top mr-1">
                                            <label onClick={() => setShowEmoji(!showEmoji)} tabindex="0" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"><EmojiIcon /></label>
                                            <div tabindex="0" class={`${showEmoji ? "block" : "hidden"} dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40`}>
                                                <div className="grid grid-cols-5">
                                                    {
                                                        emojiList.map(item =>
                                                            <input
                                                                onClick={handleEmoji} className='cursor-pointer'
                                                                value={item}
                                                                type="text"
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Type Your Message"
                                            class="input input-bordered w-full"
                                        />
                                        <button type="submit" class="inline-flex justify-center rounded-full cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600">
                                            <SendIcon
                                                iconClass="ml-2"
                                            />
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* chatting information */}
                        <div className="bg-slate-100">
                            <div className="col-span-1 text-center pt-16">
                                <Avatar
                                    img="https://api.lorem.space/image/face?hash=28212"
                                    status="online"
                                    size="w-16"
                                />
                                <h1 className="text-xl font-bold text-slate-500 ml-1 capitalize">
                                    tanvir sadi
                                </h1>
                            </div>

                            <div className="mt-8">
                                <Collapse header="customize chat">
                                    <p>tanvir hossain sadi</p>
                                </Collapse>
                                <Collapse header="customize chat">
                                    <p>tanvir hossain sadi</p>
                                </Collapse>
                                <Collapse header="media file">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        <img className='p-1 bg-slate-400 rounded-lg' src="https://i.ibb.co/6y4tRSv/mango.jpg" alt="media file" />
                                        <img className='p-1 bg-slate-400 rounded-lg' src="https://i.ibb.co/6y4tRSv/mango.jpg" alt="media file" />
                                        <img className='p-1 bg-slate-400 rounded-lg' src="https://i.ibb.co/6y4tRSv/mango.jpg" alt="media file" />
                                        <img className='p-1 bg-slate-400 rounded-lg' src="https://i.ibb.co/6y4tRSv/mango.jpg" alt="media file" />
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sidebar drawer */}
                <div class="drawer-side bg-slate-100">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class=" menu p-4 overflow-y-auto w-96 md:w-80 text-base-content">
                        {/* profile area */}
                        <div className="flex justify-between items-center">
                            <div className="flex justify-center items-center">
                                <Avatar
                                    img="https://api.lorem.space/image/face?hash=28212"
                                    status="online"
                                    size="w-9"
                                />
                                <h1 className="text-lg font-bold text-slate-500 ml-1 capitalize">tanvir sadi</h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <DotIcon />
                                <EditIcon iconClass="ml-1" />
                            </div>
                        </div>

                        {/* chat area */}
                        <div className=" mt-5">
                            {/* search friends */}
                            <div class="flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
                                <input onChange={(e) => setSearch(e.target.value)} type="search" class="w-full px-4 py-2 text-gray-800 rounded-full focus:outline-none" placeholder="search" x-model="search" />
                            </div>
                            {/* Active Friend List */}
                            <ActiveFriendList />
                            {/* Chat History */}
                            <ChatHistory  friends={friends} />
                        </div>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Chat;