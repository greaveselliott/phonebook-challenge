import React from 'react';
import { AddressContact } from './'; 

const AddressBook = ({contacts}) => (
    <ul className="address-book">
        {contacts.map(contact => <AddressContact key={contact.name} contact={contact}/>)}
    </ul>
);
  
export default AddressBook;