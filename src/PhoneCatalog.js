import React from 'react';
import Phone from './Phone';
import PhoneDetailsPage from './PhoneDetailsPage';

const PhoneCatalog = ({ phones, phoneId, setFilter }) => {
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
          ? <PhoneDetailsPage phone={phone} />
          : (
            <div>
              <label>
                <div className="search">
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={setFilter}
                  />
                  <hr />
                </div>
              </label>

              {phones.map(phone => <Phone phone={phone} key={phone.id} />)}
            </div>
          )
      }
    </div>
  );
};

export default PhoneCatalog;