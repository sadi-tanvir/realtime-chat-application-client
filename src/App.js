import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import Chat from './pages/Chat/Chat';
import Login from './pages/Login-User/Login/Login';
import Register from './pages/Login-User/Register/Register';
import { ToastContainer } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import RequireAuth from "./pages/Login-User/RequireAuth/RequireAuth";
import CheckLoginAuth from './pages/Login-User/RequireAuth/CheckLoginAuth';
import UpdateUserInfo from './pages/UpdateUserInfo/UpdateUserInfo';

const App = () => {
  const dispatch = useDispatch()
  const { isAuthenticate } = useSelector(state => state.authReducer)

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      dispatch({ type: 'userInfo', payload: JSON.parse(localStorage.getItem('userInfo')) })
      dispatch({ type: 'accessToken', payload: JSON.parse(localStorage.getItem('accessToken')) })

      dispatch({ type: 'loginUser' })
      setAuthToken(JSON.parse(localStorage.getItem('accessToken')))
    }
  }, [localStorage.getItem('userInfo'), isAuthenticate])


  return (
    <>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Chat />
          </RequireAuth>
        } />
        <Route path="/updateInfo" element={
          <RequireAuth>
            <UpdateUserInfo />
          </RequireAuth>
        } />
        <Route path="/login" element={
          <CheckLoginAuth>
            <Login />
          </CheckLoginAuth>
        } />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;