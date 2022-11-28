import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CardList.css';
import CardItem from '../CardItem/CardItem';
import { RootState } from '../reducer/store';
// import stateContext from '../reducer/context/context';

function CardList(): JSX.Element {
  const bober = useNavigate();
  // const { state } = useContext(stateContext);
  const { ad } = useSelector((state:RootState) => state.adState);

  return (
    <div className="cards__container">
      <ul className="cards__list">
        {ad.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </ul>
      <button type="button" onClick={() => bober(-1)}>
        Back
      </button>
    </div>
  );
}

export default CardList;
