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
        <Search/>
      </main>
    );
  }
}

const Header = ({children}) => (
  <div className="app__header">
    {children}
  </div>
);



const AddressBook = ({contacts}) => {
  return <ul className="address-book">{contacts.map(contact => <AddressContact contact={contact}/>)}</ul>
};

const AddressContact = ({contact}) => {
  return  <li className="address-book__contact">
              <img className="address-book__avatar" src="" alt={`${contact.name}`} itemprop="image"/>
              <h3 className="address-book__name" itemprop="name">{contact.name}</h3>
              <p className="address-book__phone" itemprop="telephone">{contact.phone_number}</p>
              <ol className="address-book__address" itemprop="address">
                {contact.address.split(',').map(address_line => <li className="address-book__address-line">{address_line}</li>)}
              </ol>
          </li>
};

const Search = ({}) => (
  <form className="search">
    <input type="text" className="search__input-field"/>
    <input type="submit" className="search__submit-button"/>
  </form>
);

export default App;
