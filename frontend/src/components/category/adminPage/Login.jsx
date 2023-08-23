import React, { useState } from 'react';
import './Login.css';
import { Registration } from './registration/Registration';

export default function Login({ setIsLogged }) {
  const [user, setUser] = useState({
    id: '',
    login: '',
    password: '',
    senderId: 1,
  });

  const [error, setError] = useState(false);
  const [showRegistration, setShowRegistration] = useState(true);

  const onUserInput = (key) => (e) => {
    setUser({
      ...user,
      id: crypto.randomUUID(),
      [key]: e.target.value,
    });
    setError(false);
  };

  const onLogin = async () => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: user.login, password: user.password }),
    });

    if (response.ok) {
      setIsLogged(true);
    } else {
      setError('Неверный логин и пароль');
      if (user.login === '' && user.password === '') {
        setError('Поля не должны быть пустыми');
      }
    }
  };

  const inputClass = error ? 'login-input error error-border' : 'login-input';

  const handleShowRegistration = () => {
    setShowRegistration(false);
  };

  return (
    <div className='bgimg'>
      <img className='picture' src='./telegram1.png' alt='' />
      {!showRegistration ? (
        <div className='login  bg-black/70 rounded-xl mt-5'>
          <div className=''>
            <h2 style={{ textAlign: 'center' , color:'white' , fontSize:'23px',padding:'8px' }}>Добро пожаловать в Telegram!</h2>
            <h4 style={{ textAlign: 'center'  , color:'white', fontSize:'16px', padding:'12px'}}>Пожалуйста введите логин и пароль</h4>
            <input
              style={{ paddingLeft: 15 }}
              placeholder='Введите логин'
              onChange={onUserInput('login')}
              className={inputClass}
              value={user.login}
            />
            <input
              type='password'
              style={{ paddingLeft: 15 }}
              placeholder='Введите пароль'
              onChange={onUserInput('password')}
              className={inputClass}
              value={user.password}
            />
            {error && <p style={{ color: 'red', marginLeft: 50, marginTop: -20 }} className='error-message '>{error}</p>}
            <button onClick={onLogin}>Login</button>
          </div>
          <a style={{ cursor: 'pointer' , color:'white',}} className='flex justify-center items-center'  href='a' onClick={handleShowRegistration}>
            Sing up
          </a>
        </div>
      ) : (
        <Registration setRegistrad={setShowRegistration} setShowRegistration={setShowRegistration} />
      )}
    </div>
  );
}
