import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import Avatar from '../../shared/re-usable-components/Avatar';
import { DotIcon, EditIcon } from '../../shared/re-usable-components/Icon';

const UserProfile = () => {
    // redux
    const { userInfo } = useSelector(state => state.authReducer)
    const dispatch = useDispatch()

    // router
    const navigate = useNavigate()

    const [userDropDown, setUserDropDown] = useState(false)

    const handleLogOut = () => {
        dispatch({ type: 'logOutUser' })
        localStorage.removeItem('userInfo')
        navigate('/login')
    }

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center">
                    <Avatar
                        img={userInfo.picture}
                        status="online"
                        size="w-9"
                    />
                    <h1 className="text-lg font-bold text-slate-500 ml-1 capitalize">{userInfo.name}</h1>
                </div>
                <div className="flex justify-center items-center">
                    <Link to="/updateInfo">
                        <EditIcon iconClass="mr-1" />
                    </Link>

                    <div className="relative text-sm">
                        <button onClick={() => setUserDropDown(!userDropDown)} id="userButton" className="flex items-center focus:outline-none mr-3">
                            <DotIcon />
                        </button>
                        <div div id="userMenu" className={`${userDropDown ? "" : "invisible"} bg-white w-40 rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30`}>
                            <ul className="list-reset px-2 py-2">
                                <li onClick={handleLogOut} className={`px-2 cursor-pointer bg-red-500 text-white font-bold text-center mt-2 rounded-md shadow`}>
                                    <a>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;