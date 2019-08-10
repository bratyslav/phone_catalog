import React from 'react';
import PropTypes from 'prop-types';

const BasketItem = ({ item, changeQuantityInBasket, deleteItemFromBasket }) => (
  <div>
    <div className="basket__item">
      <div>
        <img src={require(`../${item.imageUrl}`)} />
        <h2 className="basket__phone-name">{item.phone}</h2>
      </div>
      
      <div>
        <div className="basket__quantity-wrapper">
          <button
            className="basket__changing-quantity-button"
            onClick={
              () => changeQuantityInBasket(item.phone, item.imageUrl, 1)
            }
            disabled={item.quantity === 99}
          >
            +
          </button>
          <div className="basket__quantity">{item.quantity}</div>
          <button
            className="basket__changing-quantity-button"
            onClick={
              () => changeQuantityInBasket(item.phone, item.imageUrl, -1)
            }
            disabled={item.quantity === 1}
          >
            -
          </button>
        </div>

        <button
          className="basket__delete-button"
          onClick={() => deleteItemFromBasket(item.phone)}
        >
          ×
        </button>
      </div>
    </div>
    <hr className="basket__underline"/>
  </div>
);

BasketItem.propTypes = {
  item: PropTypes.object.isRequired,
  changeQuantityInBasket: PropTypes.func.isRequired,
  deleteItemFromBasket: PropTypes.func.isRequired
};

export default BasketItem;