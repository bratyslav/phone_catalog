import React from 'react';

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  render() {
    const { basketItems, deleteItemFromBasket } = this.props;

    return (
      basketItems[0] ?
      basketItems.map(item => (
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
      ))
      : <div className="basket__empty">
          <span>Basket is Empty</span>
        </div>
    );
  };
};

export default Basket;