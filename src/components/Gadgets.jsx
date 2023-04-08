import React from 'react'
import TechGadgets from './img/TechGadgets.png';
import { PRODUCTS } from "../products";
import { Product } from './product';

function Gadgets() {
   
    return (
        <div className="blog-post-intro">
          
            <h2>Gadgets you may or may not need as a developer</h2>
           
           
            <div className='imgWrapperthree'>
                <hr></hr>
              <img src={TechGadgets} alt="TechGadgets" className="img-fluidthree rounded"/>
           </div>
           <h6 className='text-sm'>*Please note the descriptions is humor* </h6>
            <div className="products">
            {PRODUCTS.map((product) => 
                <Product data={product}/>
            )}
           
            </div>
        </div>
    );
};

export default Gadgets;