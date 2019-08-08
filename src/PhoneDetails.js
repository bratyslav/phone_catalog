import React, { Component } from 'react';

class PhoneDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneDetails: [],
      imgUrl: ''
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

    if (detailHeader !== 'id'
      && detailHeader !== 'name'
      && detailHeader !== 'images'
      && detailHeader !== 'description'
      && detailHeader !== 'availability'
      && phoneDetails[detailHeader].length !== 0
      && Object.keys(phoneDetails[detailHeader]).length !== 0)
    {
      return detailHeader;
    };
  };

  getDetail = (detailHeader) => {
    const { phoneDetails } = this.state;

    if (typeof phoneDetails[detailHeader] === 'string') {
      return (
        <div>
          {phoneDetails[detailHeader]}
        </div>
      );
    };
    
    return (
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

  render() {
    const { phoneDetails, imgUrl } = this.state;
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
              onClick={() => setItemToBasket(phone.name, imgUrl)}
            >
              Add to Basket
            </button>
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

export default PhoneDetails;