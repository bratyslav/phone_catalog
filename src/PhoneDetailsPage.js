import React, { Component } from 'react';
import { getPhoneDetails } from './api/data';
import Loader from './Loader';
import PhoneDetails from './PhoneDetails';

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
            : <Loader/>
        }
      </div>
    );
  };
};

export default PhoneDetailsPage;