import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
    imageSrc: 'https:// content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name:'Tonitinno Pizzeria',
    address:'1010 Paddington Way',
    city: 'Flavortown',
    postCode: 'SW1V 2EH',
    category: 'South-American',
    rating:4.8,
    reviewCount:90
}
const businesses=[
  business,
  business,
  business,
  business,
  business,
  business,
  business,
  business,
  business
];
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hungry?</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;

