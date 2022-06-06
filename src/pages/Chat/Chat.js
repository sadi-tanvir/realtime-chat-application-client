import React, { useEffect } from 'react';
import axios from "axios"
import { apiBaseUrl } from '../../utils/apiBaseUrl';


const Chat = () => {

    useEffect(() => {
        const getChatData = async () => {
            const res = await axios.get(`${apiBaseUrl}/api/chat`)
            console.log(res.data);
        }
        getChatData()

        return () => {

        }
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-red-500'>This is chat page</h1>
        </div>
    );
};

export default Chat;