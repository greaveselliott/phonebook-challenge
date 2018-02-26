import React, { Component } from 'react';
import './App.scss';
import { AddressBook, Header, Search, Sort } from './components';

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

export default App;
