import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    const submit = e => {
        e.preventDefault();
        const objeto = {
            email: user,
            password: password
        }
        axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/users/login`, objeto)
            .then(res => {
                localStorage.setItem('token', res.data.data.token);
                navigate('/');
            })
            .catch(err => {
                if(err.response.status === 400) alert(`${err.response.data.status}: ${err.response.data.message}`)
                if(err.response.status === 404) alert(`${err.response.data.status}: ${err.response.data.message}`)
            })
    }

    const logout = () => {
        localStorage.setItem('token', '');
        navigate('/login');
    }

    return (
        <section className='section-login'>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="user">User</label>
                    <input type="email" id='user' value={user} onChange={e => setUser(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" id='password' value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <button>submit</button>
            </form>
            <button onClick={logout}>Log out</button>
        </section>
    );
};

export default Login;