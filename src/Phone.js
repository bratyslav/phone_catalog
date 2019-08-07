import React from 'react';
import { NavLink } from 'react-router-dom';

const Phone = ({ phone }) => {
  return (
    <div className="phone">
      <img
        src={require(`../${phone.imageUrl}`)}
        alt="phone"
        className="phone__image"
      />

      <div className="phone__info">
        <NavLink to={`/phones/${phone.id}`}>
          <h2>{phone.name}</h2>
        </NavLink>

        <div>{phone.snippet}</div>
      </div>
    </div>
  );
};

export default Phone;