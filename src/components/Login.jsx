import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardLogin from './CardLogin';
import CardUserLogged from './CardUserLogged';

const Login = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    return (
        <section className='section-login'>
            {
                token !== "" ? <CardUserLogged /> : <CardLogin/> 
            }
        </section>
    );
};

export default Login;