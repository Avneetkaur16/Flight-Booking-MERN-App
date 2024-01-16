import React, { useState } from 'react';
import planeLogo from '../../assets/planeLogo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [credientials, setCredentials] = useState({ username: '', password: '' });

  const fields = [
    {
      id: 1,
      name: 'username',
      label: 'Username',
      placeholder: 'Enter Username',
      value: credientials.username,
      pattern: '^[a-zA-Z0-9]{8,16}',
      err: 'Required',
      type: 'text',
      required: true
    },
    {
      id: 2,
      name: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      value: credientials.password,
      pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%&])[a-zA-Z0-9!@#$%]{8,20}$',
      err: 'Required',
      type: 'password',
      required: true
    }
  ];

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credientials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/user/login', credientials);
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data);
    navigate('/');
  }

  return (
    <div className='login-main'>
      <div className='login-logo'>
        <img src={planeLogo} alt='planeLogo' />
        <h1>SkyProbe</h1>
      </div>
      <form className='login-container'>
        {fields.map((field) => (
          <div className='login-field'>
            <label>{field.label}</label>
            <input key={field.id} name={field.name} value={field.value} placeholder={field.placeholder} pattern={field.pattern} type={field.type} onChange={handleChange} required={field.required} />
            <span>{field.err}</span>
          </div>
        ))}
        <button className='login-button' onClick={handleSubmit}>Login</button>
      </form>
      <p>Don't have an account? <a href='/register'>Sign Up</a></p>
    </div>
  )
}

export default Login