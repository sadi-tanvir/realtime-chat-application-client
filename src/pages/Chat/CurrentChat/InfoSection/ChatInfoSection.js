import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../../../shared/re-usable-components/Avatar';
import Collapse from '../../../shared/re-usable-components/Collapse';




const ChatInfoSection = () => {
    const { currentChat } = useSelector(state => state.chatReducer)

    return (
        <>
            {/* Friend's Chat Media information */}
            <div className="bg-slate-100">
                <div className="col-span-1 text-center pt-16">
                    <Avatar
                        img="https://api.lorem.space/image/face?hash=28212"
                        status="online"
                        size="w-16"
                    />
                    <h1 className="text-xl font-bold text-slate-500 ml-1 capitalize">
                        {currentChat.name}
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
        </>
    );
};

export default ChatInfoSection;