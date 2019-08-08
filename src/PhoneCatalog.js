import React from 'react';
import Phone from './Phone';
import PhoneDetailsPage from './PhoneDetailsPage';
import Filter from './Filter';

class PhoneCatalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedBy: ''
    }
  };

  setSortType = (event) => {
    this.setState({ sortedBy: event.target.value });
  };

  sortPhones = (a, b) => {
    switch (this.state.sortedBy) {
      case 'Alphabetical':
        return a.name.localeCompare(b.name)

      case 'Newest':
        return a.age -  b.age;

      default:
        return true;
    };
  };

  render() {
    const { phones, phoneId, setFilter, setItemToBasket } = this.props;
    const phone = phones.find(phone => phone.id === phoneId);
    if (phoneId && !phone) {
      return (
        <h1 className="not-found-message">Phone Was Not Found</h1>
      );
    };

    return (
      <div>
        {
          phoneId
            ? <PhoneDetailsPage phone={phone} setItemToBasket={setItemToBasket} />
            : (
              <div>
                <Filter setFilter={setFilter} setSortType={this.setSortType} />
                {
                  phones
                    .sort(this.sortPhones)
                    .map(phone => <Phone phone={phone} key={phone.id} />)
                }
              </div>
            )
        }
      </div>
    );
  };
};

export default PhoneCatalog;