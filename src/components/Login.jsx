import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ user, setUser ] = useState({});
    const token = localStorage.getItem('token');

    const submit = e => {
        e.preventDefault();
        const objeto = {
            email: email,
            password: password
        }
        axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/users/login`, objeto)
            .then(res => {
                // guardar user acá
                console.log(res.data.data.user);
                localStorage.setItem('token', res.data.data.token);
                navigate('/');
            })
            .catch(err => {
                if(err.response.status === 400) alert(`${err.response.data.status}: ${err.response.data.message}`)
                if(err.response.status === 404) alert(`${err.response.data.status}: ${err.response.data.message}`)
            })
            // alert(token);
        }
        
    const logout = () => {
        localStorage.setItem('token', '');
        navigate('/login');
        // alert(token);
    }

    return (
        <section className='section-login'>
            <form onSubmit={submit} className='form-login'>
                <h3>Welcome! Enter your email and password to continue</h3>
                <div className='container-input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='container-input'>
                    <label htmlFor="password">Password</label>
                    <input type="pasword" id='password' value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <button>Login</button>
                <p>Don't have an account? <a href="">Sign up</a></p>
            </form>
            {
                token !== "" && (<button onClick={logout}>Log out</button>) 
            }
        </section>
    );
};

export default Login;