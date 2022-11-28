/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './CardItem.module.css';
import Card from '../CardList/types/Card';
import trash from './trash.png';
// import './CardItem.css';
import * as api from '../../App/api';
// import stateContext from '../reducer/context/context';

function CardItem({ card }: { card: Card }): JSX.Element {
  // const { dispatch } = useContext(stateContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onHandleNavigate(): void {
    navigate(`/cards/${card.id}`);
  }

  const delAd = (): void => {
    api.deleteItem(card.id!).then((res) => res && dispatch({ type: 'DEL_AD', payload: card.id }));
  };
  return (
    <div className={style.card__container}>
      <img onClick={delAd} className={style.card__trash} src={trash} alt="trash" />
      <h3 onClick={onHandleNavigate} className={style.card__title}>
        {card.title}
      </h3>
      <p className={style.card__description}>{card.description}</p>
      <img src={card.img} className={style.card__img} alt="card" />
      <span className={style.card__price}>{card.price} p.</span>
    </div>
  );
}

export default CardItem;
