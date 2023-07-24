import React, { useEffect, useState } from 'react';
import '../amazondeals.css'
function Deals() {
  const [deals, setDeals] = useState([]);

 const getDeals = async () => {
    try {
   const res = await fetch('/api/server', {method: 'GET'})
   const data = await res.json();
    //   .then(response => response.json())
    //   .then(data => {
        setDeals(data);
      }
      catch(error) {

       console.error('Error fetching data:', error)
  }
}

  useEffect(() => {
    getDeals();
  }, []);

  //console.log(deals);
  var newArray = [];

  for (let i = 0; i < deals.length; i++) {
    var discountPrice = deals[i].price
    var regularPrice = deals[i].price_strikethrough
    var calculate = (regularPrice - discountPrice) 
   
    var calculateAgain = (calculate / regularPrice) * 100 
    
     
    var discountPercentage = calculateAgain.toFixed(2) + "%"
    //console.log(discountPercentage)

     newArray.push({ type: 'percentage', discountPercentage: discountPercentage });
     deals[i].discountPercentage = discountPercentage
  }
  //console.log("newArray: ", deals);
  
  return (
    <div className="deals-container">
    {deals.map((deal, index) => (
      <div key={index} className="card-container">
        <div className="card">
          <img src={deal.url_image} alt={deal.title} className="card-image" />
          <div className="card-title">{deal.title.slice(0,50)}</div>
          {deal.price_strikethrough && (
            <div className="card-original-price">Original Price: ${deal.price_strikethrough}</div>
          )}
          <div className="card-price">Discounted Price: ${deal.price}</div>
          <div className="card-discount">Discount Percentage: {newArray[index].discountPercentage} Off</div>
          <div className="card-rating">Rating: {deal.rating}</div>
          <div className="card-reviews">Reviews: {deal.reviews_count}</div>
          <div className="card-sales-volume">Sales Volume: {deal.sales_volume}</div>
          <div className="card-shipping-info">Shipping: {deal.shipping_information.slice(0,40)}</div>
            <button type="button" className='addToCartBttntwo' onClick={(e) => {
                e.preventDefault();
                window.open(`https://www.amazon.com${deal.url}`, "_blank")}}>View Deal</button>
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default Deals;
