import React from 'react';
import { Route, Routes } from "react-router-dom"
import Chat from './pages/Chat/Chat';
import Home from './pages/Home/Home';
import Login from './pages/Login-User/Login/Login';
import Register from './pages/Login-User/Register/Register';
import { ToastContainer } from "react-toastify"
import { useDispatch } from 'react-redux';
import setAuthToken from './utils/setAuthToken';


const App = () => {
  const dispatch = useDispatch()

  if (localStorage.getItem('userInfo')) {
    dispatch({ type: 'userInfo', payload: JSON.parse(localStorage.getItem('userInfo')) })
    dispatch({ type: 'accessToken', payload: JSON.parse(localStorage.getItem('accessToken')) })

    dispatch({ type: 'loginUser' })
    setAuthToken(JSON.parse(localStorage.getItem('accessToken')))
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;