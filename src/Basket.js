import React from 'react';
import PropTypes from 'prop-types';

const Basket = ({ basketItems, deleteItemFromBasket }) => (
  basketItems[0]

    ? <main className="basket__main">
        <h1 className="basket__header">Basket</h1>

        {basketItems.map(item => (
          <div key={item.phone}>
            <div className="basket__item">
              <img src={require(`../${item.imageUrl}`)} />

              <h2 className="basket__phone-name">{item.phone}</h2>

              <div className="basket__quantity">{item.quantity}</div>

              <button
                className="basket__delete-button"
                onClick={() => deleteItemFromBasket(item.phone)}
              >
                ×
              </button>
            </div>
            <hr className="basket__underline"/>
          </div>
        ))}
      </main>



    : <div className="basket__empty">
        <span>Basket is Empty</span>
      </div>
);

Basket.propTypes = {
  basketItems: PropTypes.array.isRequired,
  deleteItemFromBasket: PropTypes.func.isRequired
};

export default Basket;