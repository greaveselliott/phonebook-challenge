import React, { Component } from 'react';
import './App.scss';
import { filter } from 'benchmark';
class App extends Component {

  sortBy = ["Name", "Phone number", "Address"];

  state = {
    original: [],
    contacts: [],
    selectedContact: null,
    typeValue: this.sortBy[0]
  }

  typeHandler (event) {
    this.setState({typeValue: event.target.value});
  }

  searchHandler (event) {
      const type = this.state.typeValue.toLowerCase();

      let filtered = this.state.original.filter(contact => {
          const value = contact[type].toLowerCase();
          const term = event.target.value.toLowerCase();

          return value.indexOf(`${term}`) > -1 || term.length <= 0; 
      });
      this.setState({contacts: filtered});
  }

  componentWillMount() {
     fetch("http://www.mocky.io/v2/581335f71000004204abaf83")
     .then((response) => { return response.json(); })
     .then((response) => {
         this.setState({
            original: response.contacts,
            contacts: response.contacts,
          })
     });
  }

  render() {
    return (
      <main className="app">
        <Header>
          <Sort typeHandler={this.typeHandler.bind(this)} options={this.sortBy}/>
          <Search searchHandler={this.searchHandler.bind(this)}/>
        </Header>
        <AddressBook contacts={this.state.contacts}/>
      </main>
    );
  }
}

const AddressBook = ({contacts}) => {
  return <ul className="address-book">{contacts.map(contact => <AddressContact key={contact.name} contact={contact}/>)}</ul>
};

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

const Header = ({children}) => (
  <div className="header">
    {children}
  </div>
);

const Sort = ({typeHandler, options}) => {
  return (
    <div className="header__sort">
      <label className="header__label">Sort</label>
      <select onChange={typeHandler} className="select-field">
        {
          options.map(option => (
            <option key={option} value={option.replace(/ /g,"_")}>{option}</option>
          ))
        }
    </select>
    </div>
  );
}

const Search = ({searchHandler}) => (
  <div className="header__search">
    <input type="text" className="input-field" onChange={searchHandler}/>
    <input type="submit" value="Search" className="submit-button"/>
  </div>
);

export default App;
