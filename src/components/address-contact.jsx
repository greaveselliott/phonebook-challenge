import React from 'react';

const AddressContact = ({contact}) => (
    <li className="address-book__contact">
      <figure className="address-book__avatar">
        <img className="address-book__image" src="https://loremflickr.com/100/100" alt={`${contact.name}`} itemProp="image"/>
      </figure>
      <figcaption className="address-book__details">
        <h3 className="address-book__name" itemProp="name">{contact.name}</h3>
        <small className="address-book__phone" itemProp="telephone">{contact.phone_number}</small>
        <small className="address-book__address" itemProp="address">
          {contact.address}
        </small>
      </figcaption>
  </li>
);

export default AddressContact;