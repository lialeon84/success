import React from 'react'

export const Product = (props) => {
    const {id, productName, description, image, webPage} = props.data;
  return (
    <div className='gadgets'>
      <img src={image} alt="gadgets"/>
      <div className='description'>
        <h4>
            <b>
                {productName}
            </b>
        </h4>
        <small>
            {description}
        </small>
      </div>
      <button type="button" className='addToCartBttn' onClick={(e) => {
      e.preventDefault();
      window.open(webPage, "_blank")}}>Amazon</button>
    </div>
  )
}
