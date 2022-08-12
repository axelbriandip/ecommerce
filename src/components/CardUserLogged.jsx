import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogged } from '../store/slices/userLogged.slice';

const CardUserLogged = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.setItem('token', '');
        localStorage.setItem('firstname', '')
        localStorage.setItem('lastname', '')
        dispatch(setUserLogged([]))
        navigate('/login');
    }

    const userLogged_store = useSelector(state => state.userLogged);
    return (
        <div className='card-user-logged'>
            <i className="fa-solid fa-user"></i>
            <span>{localStorage.getItem('lastname')}, {localStorage.getItem('firstname')}</span>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default CardUserLogged;