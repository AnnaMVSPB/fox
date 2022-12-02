import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CardList from '../features/CardList/CardList';
import Form from '../features/Form/Form';
import Header from '../features/Header/Header';
import * as api from './api';
import './App.css';
import MainPage from '../features/Main/MainPage';
import CardPage from '../features/CardPage/CardPage';
import Auth from '../features/auth/Auth';

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    api.loadCards().then((data) => dispatch({ type: 'INIT_AD', payload: data }));
  }, []);

  return (
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="main" element={<MainPage />} />
          <Route path="cards" element={<CardList />} />
          <Route path="cards/:cardId" element={<CardPage />} />
          <Route path="form" element={<Form />} />
          <Route path="auth/:name" element={<Auth />} />
        </Route>
      </Routes>
  );
}

export default App;
