import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import planeLogo from '../../assets/planeLogo.png';

const Register = () => {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ firstName: '', lastName: '', email: '', username: '', password: '', confirm: '' });

  const fields = [
    {
      id: 1,
      name: 'firstName',
      label: 'First Name',
      placeholder: 'First Name',
      value: credentials.firstName,
      pattern: '^[a-zA-Z]{2,64}',
      err: 'Required',
      type: 'text',
      required: true
    },
    {
      id: 2,
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'Last Name',
      value: credentials.lastName,
      pattern: '^[a-zA-Z]{2,64}',
      err: 'Required',
      type: 'text',
      required: true
    },
    {
      id: 3,
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      value: credentials.email,
      err: 'Required',
      type: 'email',
      required: true
    },
    {
      id: 4,
      name: 'username',
      label: 'Username',
      placeholder: 'Create a Username',
      value: credentials.username,
      pattern: '^[a-zA-Z0-9]{8,16}',
      err: 'Username must be atleast 8 characters',
      type: 'text',
      required: true
    },
    {
      id: 5,
      name: 'password',
      label: 'Password',
      placeholder: 'Create a Password',
      value: credentials.password,
      pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%&])[a-zA-Z0-9!@#$%]{8,20}$',
      err: 'Required',
      type: 'password',
      required: true
    },
    {
      id: 6,
      name: 'confirm',
      label: 'Confirm Paasword',
      placeholder: 'Confirm Password',
      value: credentials.confirm,
      pattern: credentials.password,
      err: 'Passwords do not match',
      type: 'password',
      required: true
    }
  ]

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {

    e.preventDefault();
    await axios.post('/user/create', credentials);
    navigate('/login');

  }

  return (
    <div className='register-main'>
      <div className='register-logo'>
        <img src={planeLogo} alt='planeLogo' />
        <h1>SkyProbe</h1>
      </div>
      <form className='register-container'>
        {fields.map((field) => (
          <div className='register-field' key={field.id}>
            <label>{field.label}</label>
            <input key={field.id} name={field.name} value={field.value} placeholder={field.placeholder} type={field.type} pattern={field.pattern} required={field.required} onChange={handleChange}/>
            <span>{field.err}</span>
          </div>
        ))}
        <button className='register-button' onClick={handleSubmit}>Sign Up</button>
      </form>
      <p>Already have an account? <a href='/login'>Sign In</a></p>
    </div>
  )
}

export default Register