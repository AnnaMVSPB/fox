import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './auth.module.css';
import * as api from '../../App/api';
import { Res } from './types/User';

function Auth() :JSX.Element {
    const { name } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    if (name === 'logout') {
      api[name]().then((res:Res) => res.message === 'Session destroy' && dispatch({ type: 'LOGOUT' }));
    }

    const auth = (e:React.FormEvent):void => {
      e.preventDefault();
      if (name === 'registration') {
        api[name]({ email, password }).then((res:Res) => {
          if (res.message === 'такой чел уже есть') {
            navigate('/auth/login');
          } else {
            dispatch({ type: 'AUTH', payload: res });
            navigate('/');
          }
         });
      }
    };
  return (
    <>
    <h2>{name?.toUpperCase()}</h2>
      <div className={styles.form__container}>
    <form onSubmit={auth}>
      <div className="mb-3">
        <label className={styles.formLabel}>
          Email
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            type="email"
            className="form-control"
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            type="password"
            className="form-control"
          />
        </label>
      </div>
      <button className="btn btn-secondary" type="submit">
        {name?.toUpperCase()}
      </button>
    </form>
      </div>
    </>
  );
}

export default Auth;
