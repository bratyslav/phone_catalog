import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PhonesPage from './PhonesPage';
import NotFoundPage from './NotFoundPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ''
    };
  };

  setFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter } = this.state;

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
              <div className="navigation_search">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={this.setFilter}
                />
                <hr />
              </div>
            </li>
          </ul>
        </nav>



        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/phones/:phoneId?" render={(params) => (
            <PhonesPage filter={filter} {...params} />)
          } />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
