import React, { useContext, useState } from 'react';
import Card from '../CardList/types/Card';
import './Form.css';
import * as api from '../../App/api';
import stateContext from '../reducer/context/context';

function Form(): JSX.Element {

  const {dispatch}=useContext(stateContext)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const onHandleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    api.addItem({
      title,
      description,
      price,
      img,
    }).then(res=>dispatch({type:'ADD_AD',payload:res}))
  };
  return (
    <div className="form__container">
      <form action="/" method="post" onSubmit={onHandleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Title
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              name="title"
              type="text"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Description
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              name="description"
              type="text"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Price
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              name="price"
              type="number"
              className="form-control"
            />
          </label>
          <label className="form-label">
            Img
            <input
              onChange={(e) => setImg(e.target.value)}
              value={img}
              name="img"
              type="text"
              className="form-control"
            />
          </label>
        </div>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
