import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhoneDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneDetails: [],
      imgUrl: '',
      added: false
    };
  };

  componentDidMount() {
    const { phoneDetails, phone } = this.props;

    this.setState({
      phoneDetails: phoneDetails,
      imgUrl: phone.imageUrl
    })
  };

  detailsFilter = (detailHeader) => {
    const { phoneDetails } = this.state;
    const details = [
      'additionalFeatures',
      'android',
      'battery',
      'connectivity',
      'display',
      'hardware',
      'sizeAndWeight',
      'storage',
      'camera'
    ]

    if ( details.includes(detailHeader)
      && phoneDetails[detailHeader].length !== 0
      && Object.keys(phoneDetails[detailHeader]).length !== 0)
    { // отфильтровать все, что не касается деталей
      return detailHeader;
    };
  };

  getDetail = (detailHeader) => {
    const { phoneDetails } = this.state;

    if (typeof phoneDetails[detailHeader] === 'string') {
      // или строка
      return (
        <div>
          {phoneDetails[detailHeader]}
        </div>
      );
    };
    
    return ( // или объект
      Object.keys(phoneDetails[detailHeader])
        .map(detailName => (
          <div key={detailName}>
            {detailName}: {phoneDetails[detailHeader][detailName]}
          </div>
        ))
    );
  };

  setImg = (imageUrl) => {
    this.setState({ imgUrl: imageUrl });
  };

  showMessage = () => {
    this.setState({ added: true });

    setTimeout(() => {this.setState({ added: false })}, 700);
  };

  render() {
    const { phoneDetails, imgUrl, added } = this.state;
    const { phone, setItemToBasket } = this.props;

    return (
      <div className="phone-details">
        <section className="phone-details__description-wrapper">
          <div className="phone-details__images-wrapper">
            {
              imgUrl ?
              <img src={require(`../${imgUrl}`)} alt="phone photo" />
              : ''
            }
            

            <div className="phone-details__extra-images">
              {
                phoneDetails.images ?
                phoneDetails.images.map(imgUrl => (
                  <img
                    key={imgUrl}
                    src={require(`../${imgUrl}`)}
                    alt="phone photo"
                    onMouseOver={() => this.setImg(imgUrl)}
                    onMouseOut={() => this.setImg(phone.imageUrl)}
                  />
                ))
                : ''
              }
            </div>
          </div>
  
          <div>
            <h1 className="phone-details__header">{phone.name}</h1>
            <hr />
            <div className="phone-details__description" align="justify">
              {phoneDetails.description}
            </div>
            <button
              className="phone-details__add-to-basket"
              onClick={() => {
                setItemToBasket(phone.name, imgUrl);
                this.showMessage();
              }}
            >
              Add to Basket
            </button>

            <div
              className={
                added
                  ? 'phone-details__message-added--triangle'
                  : 'phone-details__message-added--hidden'
              }
            />
            <div
              className={
                added
                  ? 'phone-details__message-added--visible'
                  : 'phone-details__message-added--hidden'
              }
            >
              Added!
            </div>
          </div>
        </section>



        <section  className="phone-details__details">
          <h2 className="phone-details__details-header">
            Details
          </h2>

          {
            Object.keys(phoneDetails)
              .filter(this.detailsFilter)
              .map(detailHeader => (
                <div key={detailHeader}>
                  <h3>{detailHeader}</h3>
                  <hr />
                  <div>
                    {this.getDetail(detailHeader)}
                  </div>
                </div>
              ))
          }
        </section>
      </div>
    );
  };
};

PhoneDetails.propTypes = {
  phone: PropTypes.object.isRequired,
  setItemToBasket: PropTypes.func.isRequired
};

export default PhoneDetails;