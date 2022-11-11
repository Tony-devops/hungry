import React from 'react';
import './Business.css';

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

class Business extends React.component{
   render(){
    return(
        <div className="Business">
  <div className="image-container">
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
  </div>
  <h2>{business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{business.address} </p>
      <p>{business.city}</p>
      <p>{business.postCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{business.category}</h3>
      <h3 class="rating">{business.rating}</h3>
      <p>{business.reviewCount}</p>
    </div>
  </div>
</div>
    )
   } 
}
export default Business;