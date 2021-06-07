import React from 'react';

export default function ShopCard(props) {
    const { name, price, color, img } = props;

    return (
        <div className='ShopCard'>
            <h2 className='ShopCard-Name'>{name}</h2>
            <div className='ShopCard-Color'>{color}</div>
            <img className='ShopCard-Image' src={img} alt={name} />
            <div className='ShopCard-Price'>${price}</div>
            <button className='ShopCard-Button'>Add to cart</button>
        </div>
    )
}