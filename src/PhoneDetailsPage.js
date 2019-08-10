import React, { Component } from 'react';
import { getPhoneDetails } from './api/data';
import PhoneDetails from './PhoneDetails';
import PropTypes from 'prop-types';

class PhoneDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneDetails: [],
      loaded: false
    };
  };

  async componentDidMount() {
    const data = await getPhoneDetails(this.props.phone.id);

    this.setState({
      phoneDetails: data,
      loaded: true
    });
  };

  render() {
    const { loaded, phoneDetails } = this.state;
    const { phone, setItemToBasket } = this.props;

    return (
      <div>
        {
          loaded
            ? <PhoneDetails
                phoneDetails={phoneDetails}
                phone={phone}
                setItemToBasket={setItemToBasket}
              />
            : <div className="loader"></div>
        }
      </div>
    );
  };
};

PhoneDetailsPage.propTypes = {
  phone: PropTypes.object.isRequired,
  setItemToBasket: PropTypes.func.isRequired
};

export default PhoneDetailsPage;