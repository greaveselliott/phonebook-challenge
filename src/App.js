import React, { Component } from 'react';
import './App.scss';
class App extends Component {

  state = {
    contacts: [],
    selectedContact: null
  }

  componentWillMount() {
     fetch("http://www.mocky.io/v2/581335f71000004204abaf83")
     .then((response) => { return response.json(); })
     .then((response) => {
         this.setState({contacts: response.contacts})
     });
  }

  render() {
    return (
      <main className="app">
        <Header/>
        <AddressBook contacts={this.state.contacts}/>
      </main>
    );
  }
}



const AddressBook = ({contacts}) => {
  return <ul className="address-book">{contacts.map(contact => <AddressContact contact={contact}/>)}</ul>
};

const AddressContact = ({contact}) => {
  return  <li className="address-book__contact">
              <figure className="address-book__avatar">
                <img className="address-book__image" src="https://loremflickr.com/100/100" alt={`${contact.name}`} itemprop="image"/>
              </figure>
              <figcaption className="address-book__details">
              <h3 className="address-book__name" itemprop="name">{contact.name}</h3>
              <small className="address-book__phone" itemprop="telephone">{contact.phone_number}</small>
              <small className="address-book__address" itemprop="address">
                {contact.address}
              </small>
              </figcaption>
          </li>
};

const Header = ({}) => (
  <form className="header">
    <div className="header__sort">
      <label className="header__label">Sort</label>
      <select className="select-field">
        <option value="name">Name</option>
        <option value="phone">Phone</option>
        <option value="address">Address</option>
      </select>
      <select className="select-field">
        <option value="Asc">A-Z</option>
        <option value="Dsc">Z-A</option>
      </select>
    </div>
    <div className="header__search">
        <input type="text" className="input-field"/>
        <input type="submit" value="Search" className="submit-button"/>
    </div>
  </form>
);

export default App;
