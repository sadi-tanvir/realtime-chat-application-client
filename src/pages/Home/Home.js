import React from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"

const Home = () => {

    const state = useSelector(state => state.authReducer)
    console.log(state);

    const dispatch = useDispatch()

    const addDataToRedux = () => {
        dispatch({ type: 'homeChange' })
    }
    return (
        <div>
            <h1 className='text-5xl text-green-500'>This is Home Page</h1>
            <a href="https://i.ibb.co/jgDtzL8/empty-avatar.jpg" download>
                download
            </a>

            <button className="mt-10 btn btn-primary w-6/12 block mx-auto" onClick={addDataToRedux}>add data to redux</button>
        </div>
    );
};

export default Home;