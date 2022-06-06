import React from 'react';
import { Route, Routes } from "react-router-dom"
import Chat from './pages/Chat/Chat';
import Home from './pages/Home/Home';
import Login from './pages/Login-User/Login/Login';
import Register from './pages/Login-User/Register/Register';
import { ToastContainer } from "react-toastify"


const App = () => {


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