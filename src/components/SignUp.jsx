import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLogged } from '../store/slices/userLogged.slice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ phone, setPhone ] = useState('');

    const submit = e => {
        e.preventDefault();
        const objeto = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password,
            phone: phone,
            password: password,
            role: 'admin'
        }
        axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/users`, objeto)
            .then(res => {
                alert("User added, enter in your account");
                // dispatch(setUserLogged(res.data.data.user));
                // localStorage.setItem('token', res.data.data.token);
                navigate('/login');
            })
            .catch(err => {
                if(err.response?.status === 400) alert(`${err.response.data?.status}: ${err.response.data.message}`)
                if(err.response?.status === 404) alert(`${err.response.data?.status}: ${err.response.data.message}`)
            })
        }


    return (
        <div className='container-signup'>
            <form onSubmit={submit} className='form-login'>
                <h3>Sign up</h3>
                <div className='container-input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='container-input'>
                    <label htmlFor="firstname">First name</label>
                    <input type="text" id='firstname' value={firstname} onChange={e => setFirstname(e.target.value)}/>
                </div>
                <div className='container-input'>
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" id='lastname' value={lastname} onChange={e => setLastname(e.target.value)}/>
                </div>
                <div className='container-input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='container-input'>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id='phone' value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>
                <button>Sign up</button>
                <p>Already have an account? <Link to="/signup">Log in</Link></p>
            </form>
        </div>
    );
};

export default SignUp;