import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import CardList from '../features/CardList/CardList';
import Form from '../features/Form/Form';
import Header from '../features/Header/Header';
import * as api from './api';
import './App.css';
// import stateContext from '../features/reducer/context/context';
// import { init, reducer } from '../features/reducer/adReducer';
import MainPage from '../features/Main/MainPage';
import CardPage from '../features/CardPage/CardPage';
import Auth from '../features/auth/Auth';
import store from '../features/reducer/store';

function App(): JSX.Element {
  // const [cards, setCards] = useState<Card[]>([]);   1. на локальном стейте
  // const [state, dispatch] = useReducer(reducer, init); 2.на глобальном стейте
  const dispatch = useDispatch();
  useEffect(() => {
    api.loadCards().then((data) => dispatch({ type: 'INIT_AD', payload: data }));
  }, []);

  // const memoizedContext = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    // <stateContext.Provider value={memoizedContext}>

      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="main" element={<MainPage />} />
          <Route path="cards" element={<CardList />} />
          <Route path="cards/:cardId" element={<CardPage />} />
          <Route path="form" element={<Form />} />
          <Route path="auth/:name" element={<Auth />} />
        </Route>
      </Routes>
    // </stateContext.Provider>
  );
}

export default App;
