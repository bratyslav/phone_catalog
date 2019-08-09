import React from 'react';
import PropTypes from 'prop-types';
import BasketItem from './BasketItem';

const Basket = ({ basketItems, deleteItemFromBasket, changeQuantityInBasket }) => (
  basketItems[0]
    ? (
        <main className="basket__main">
          <h1 className="basket__header">Basket</h1>

          {basketItems.map(item => (
            <BasketItem
              key={item.phone}
              item={item}
              deleteItemFromBasket={deleteItemFromBasket}
              changeQuantityInBasket={changeQuantityInBasket}
            />
          ))}
        </main>
      )

    : (
        <div className="basket__empty">
          Basket is Empty
        </div>
      )
);

Basket.propTypes = {
  basketItems: PropTypes.array.isRequired,
  deleteItemFromBasket: PropTypes.func.isRequired
};

export default Basket;