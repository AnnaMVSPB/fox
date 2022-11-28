import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CardPage.css';
// import stateContext from '../reducer/context/context';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/store';

function CardPage(): JSX.Element {
  const { cardId } = useParams();
  const { ad } = useSelector((state:RootState) => state.adState);
  const navigate = useNavigate();
  const card = ad.find((cardItem) => cardItem.id === Number(cardId));

  return (
    <>
      <div className="card_page__container">
        <p>category</p>
        <h1 className="card_page__title">{card?.title}</h1>
        <p className="card_page__description">{card?.description}</p>
        <img className="card_page__img" src={card?.img} alt="card_img" />
        <p className="card__price">{card?.price}</p>
        <p>Avatar</p>
        <p>Name</p>
        <p>Phone</p>
      </div>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}

export default CardPage;
