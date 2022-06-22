import React from 'react';
import Avatar from '../../../../shared/re-usable-components/Avatar';
import { useSelector } from "react-redux"
import { apiBaseUrl } from '../../../../../utils/apiBaseUrl';



const Message = () => {
    // redux
    const { messages,isTyping, currentChat, activeUsers } = useSelector(state => state.chatReducer)
    const { userInfo } = useSelector(state => state.authReducer)

    
    const isUserActive = activeUsers.some(user => user.userId === currentChat._id)


    return (
        <div className="">
            {
                messages && messages.length > 0 && messages.map(message => {
                    return (
                        message.senderId === userInfo._id ?
                            <>
                                {/* My message */}
                                <div className="flex flex-col justify-start items-end mr-2 mt-3">
                                    <div className="flex justify-center items-center">
                                        <Avatar
                                            img={userInfo.picture}
                                            status="online"
                                            size="w-7"
                                        />
                                        {
                                            message.message?.image ?
                                                // my image message
                                                < p className="ml-1 py-1 px-1 rounded bg-primary text-teal-800 font-semibold">
                                                    <img src={`${apiBaseUrl}/message-images/${message.message?.image}`} className="w-32" alt="mango" border="0" />
                                                </p>
                                                :
                                                // my text message
                                                <p className="ml-1 py-1 px-2 rounded bg-primary text-slate-600 font-semibold">
                                                    {message.message?.text}
                                                </p>
                                        }


                                    </div>
                                    <small className="font-semibold text-slate-600">11 Jun 2022</small>
                                </div>
                            </>
                            :
                            <>
                                {/* Friend's message */}
                                <div className="flex flex-col justify-start items-start ml-2 mt-3">
                                    <div className="flex justify-center items-center">
                                        <Avatar
                                            img={currentChat.picture}
                                            status={isUserActive ? 'online' : 'offline'}
                                            size="w-7"
                                        />
                                        {
                                            message.message?.image ?
                                                // Friend's Image message
                                                <p className="ml-1 py-1 px-1 rounded bg-slate-300 text-slate-600 font-semibold">
                                                    <img src={`${apiBaseUrl}/message-images/${message.message?.image}`} className="w-32" alt="mango" border="0" />
                                                </p> :
                                                // Friend's text message
                                                <p className="ml-1 py-1 px-2 rounded bg-slate-300 text-slate-600 font-semibold">
                                                    {message.message?.text}
                                                </p>

                                        }
                                    </div>
                                    <small className="ml-8 font-semibold text-slate-600">10 Jun 2022</small>
                                </div>



                            </>

                    )
                })
            }

            {/*  showing typing status */}
            {
                isTyping?.message && isTyping?.senderId === currentChat._id && isTyping?.receiverId === userInfo._id &&
                <div className="flex flex-col justify-start items-start ml-2 mt-3">
                    <div className="flex justify-center items-center">
                        <Avatar
                            img={currentChat.picture}
                            status={isUserActive ? 'online' : 'offline'}
                            size="w-7"
                        />

                        <p className="ml-1 py-1 px-2 rounded bg-teal-300 text-slate-600 font-semibold">
                            typing....
                        </p>
                    </div>
                    <small className="ml-8 font-semibold text-slate-600">10 Jun 2022</small>
                </div>
            }

        </div >
    );
};

export default Message;



            // <div className="flex flex-col justify-start items-start ml-2 mt-3">
            //     <div className="flex justify-center items-center">
            //         <Avatar
            //             img="https://api.lorem.space/image/face?hash=28212"
            //             status="online"
            //             size="w-7"
            //         />

            //         {/* text message */}
            //         {/* <p className="ml-1 py-1 px-2 rounded bg-primary text-teal-800 font-semibold">
            //             hi how are you
            //         </p> */}

            //         {/* img or file */}
            //         <p className="ml-1 py-1 px-1 rounded bg-primary text-teal-800 font-semibold">
            //             <img src="https://i.ibb.co/6y4tRSv/mango.jpg" className="w-32" alt="mango" border="0" />
            //         </p>
            //     </div>
            //     <small className="ml-8 font-semibold text-slate-600">10 Jun 2022</small>
            // </div>


            // <div className="flex flex-col justify-start items-end mr-2 mt-3">
            //     <div className="flex justify-center items-center">
            //         <Avatar
            //             img="https://api.lorem.space/image/face?hash=28212"
            //             status="online"
            //             size="w-7"
            //         />
            //         {/* text message */}
            //         {/* <p className="ml-1 py-1 px-1 rounded bg-slate-300 font-semibold text-slate-600">
            //             I am fine what about you
            //         </p> */}
            //         {/* img or file */}
            //         <p className="ml-1 py-1 px-1 rounded bg-slate-300 font-semibold text-slate-600">
            //             {/* I am fine what about you */}
            //             <img src="https://i.ibb.co/6y4tRSv/mango.jpg" className="w-32" alt="mango" border="0" />
            //         </p>
            //     </div>
            //     <small className="font-semibold text-slate-600">10 Jun 2022</small>
            // </div>