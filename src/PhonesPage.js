import React, { Component } from 'react';
import { getPhoneCatalog } from './api/data';
import Loader from './Loader';
import PhoneCatalog from './PhoneCatalog';
import PropTypes from 'prop-types';

class PhonesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: [],
      loaded: false
    };
  };

  async componentDidMount() {
    const data = await getPhoneCatalog();

    this.setState({ phones: data, loaded: true });
  };
  
  filter = (phone) => {
    return phone.name.toLowerCase().includes(this.props.filter.toLowerCase());
  };

  render() {
    const { phones, loaded } = this.state;
    const { phoneId } = this.props.match.params;
    const { setItemToBasket, setFilter } = this.props;
    
    return (
      <main>
        {
          loaded
            ? <PhoneCatalog
                phones={phones.filter(this.filter)}
                phoneId={phoneId}
                setFilter={setFilter}
                setItemToBasket={setItemToBasket}
              />
            : <Loader />
        }
      </main>
    );
  };
};

PhonesPage.propTypes = {
  setItemToBasket: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default PhonesPage;