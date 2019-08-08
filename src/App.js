import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PhonesPage from './PhonesPage';
import NotFoundPage from './NotFoundPage';
import Basket from './Basket';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      basketItems: []
    };
  };

  setItemToBasket = (phoneName, imgUrl) => {
    if (this.state.basketItems.find(item => item.phone === phoneName)) {
      //  если такой товар уже есть в корзине
      this.setState((prevState) => ({
        basketItems: [
          ...prevState.basketItems
            .filter(item => (item.phone !== phoneName)),
          // переписать все кроме него
          {
            quantity: prevState.basketItems
              .find(item => item.phone === phoneName).quantity + 1,
              // в нем увеличить количество на 1
            phone: phoneName,
            imageUrl: imgUrl
          }
        ]
      }))

    } else { // иначе записать товар
      this.setState((prevState) => ({
        basketItems: [
          ...prevState.basketItems,
          {
            quantity: 1,
            phone: phoneName,
            imageUrl: imgUrl
          }
        ]
      }));
    };
  };

  setFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteItemFromBasket = (phone) => {
    this.setState((prevState) => ({
      basketItems: prevState.basketItems
        .filter(item => (item.phone !== phone))}
    ));
  };

  render() {
    const { filter, basketItems } = this.state;

    return (
      <div>
        <nav>
          <ul className="navigation">
            <li>
              <NavLink
                className='navigation__link'
                activeClassName='navigation__link--is-active'
                to="/" exact
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className='navigation__link'
                activeClassName='navigation__link--is-active'
                to="/phones"
              >
                Catalog
              </NavLink>
            </li>

            <li>
              <NavLink
                className='navigation__link'
                activeClassName='navigation__link--is-active'
                to="/basket"
              >
                Basket
              </NavLink>
            </li>
          </ul>
        </nav>



        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/basket" render={(params) => (
            <Basket
              basketItems={basketItems}
              deleteItemFromBasket={this.deleteItemFromBasket}
              {...params}
            />
          )} />
          <Route path="/phones/:phoneId?" render={(params) => (
            <PhonesPage
              filter={filter}
              setFilter={this.setFilter}
              setItemToBasket={this.setItemToBasket}
              {...params}
            />)
          } />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

