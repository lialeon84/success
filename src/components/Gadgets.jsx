import React from 'react'
import TechGadgets from './img/TechGadgets.png';
import { PRODUCTS } from "../products";
import { Product } from './product';

function Gadgets() {
   
    return (
        
        <div className="blog-post-intro py-6">
          <br></br>
            {/* <h2>Gadgets I found useful</h2> */}
           
           
            <div className='imgWrapperthree py-4'>
               
              <img src={TechGadgets} alt="TechGadgets" className="img-fluidthree rounded"/>
              <br></br>
              <hr></hr>
           </div>
           {/* <h6 className='text-sm text-red-800'>*Please take note: some of the product descriptions are for entertainment purposes. To view the full product description, click the Amazon button. </h6> */}
            <div className="products">
            {PRODUCTS.map((product) => 
                <Product data={product}/>
            )}
           
            </div>
        </div>
    );
};

export default Gadgets;