import React from 'react';
import Avatar from '../../../../shared/re-usable-components/Avatar';




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

                    {/* text message */}
                    <p className="ml-1 py-1 px-2 rounded bg-primary text-teal-800 font-semibold">
                        hi how are you
                    </p>

                    {/* img or file */}
                    {/* <p className="ml-1 py-1 px-1 rounded bg-primary text-teal-800 font-semibold">
                        <img src="https://i.ibb.co/6y4tRSv/mango.jpg" className="w-32" alt="mango" border="0" />
                    </p> */}
                </div>
                <small className="ml-8 font-semibold text-slate-600">10 Jun 2022</small>
            </div>
            <div className="flex flex-col justify-start items-start ml-2 mt-3">
                <div className="flex justify-center items-center">
                    <Avatar
                        img="https://api.lorem.space/image/face?hash=28212"
                        status="online"
                        size="w-7"
                    />

                    {/* text message */}
                    {/* <p className="ml-1 py-1 px-2 rounded bg-primary text-teal-800 font-semibold">
                        hi how are you
                    </p> */}

                    {/* img or file */}
                    <p className="ml-1 py-1 px-1 rounded bg-primary text-teal-800 font-semibold">
                        <img src="https://i.ibb.co/6y4tRSv/mango.jpg" className="w-32" alt="mango" border="0" />
                    </p>
                </div>
                <small className="ml-8 font-semibold text-slate-600">10 Jun 2022</small>
            </div>







            {/* My message */}
            <div className="flex flex-col justify-start items-end mr-2 mt-3">
                <div className="flex justify-center items-center">
                    <Avatar
                        img="https://api.lorem.space/image/face?hash=28212"
                        status="online"
                        size="w-7"
                    />
                    {/* text message */}
                    <p className="ml-1 py-1 px-2 rounded bg-slate-300 font-semibold text-slate-600">
                        I am fine what about you
                    </p>
                    {/* img or file */}
                    {/* <p className="ml-1 py-1 px-2 rounded bg-slate-300 font-semibold text-slate-600">
                        <img src="https://i.ibb.co/6y4tRSv/mango.jpg" className="w-32" alt="mango" border="0" />
                    </p> */}
                </div>
                <small className="font-semibold text-slate-600">10 Jun 2022</small>
            </div>
            <div className="flex flex-col justify-start items-end mr-2 mt-3">
                <div className="flex justify-center items-center">
                    <Avatar
                        img="https://api.lorem.space/image/face?hash=28212"
                        status="online"
                        size="w-7"
                    />
                    {/* text message */}
                    {/* <p className="ml-1 py-1 px-1 rounded bg-slate-300 font-semibold text-slate-600">
                        I am fine what about you
                    </p> */}
                    {/* img or file */}
                    <p className="ml-1 py-1 px-1 rounded bg-slate-300 font-semibold text-slate-600">
                        {/* I am fine what about you */}
                        <img src="https://i.ibb.co/6y4tRSv/mango.jpg" className="w-32" alt="mango" border="0" />
                    </p>
                </div>
                <small className="font-semibold text-slate-600">10 Jun 2022</small>
            </div>
        </div>
    );
};

export default Message;