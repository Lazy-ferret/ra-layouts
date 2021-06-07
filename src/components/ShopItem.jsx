import React from 'react';

function ShopItem(props) {
    const { name, price, color, img } = props;

    return (
        <div className='ShopItem'>
            <div className='ShopItem-Image'>
                <img src={img} alt={name} />
            </div>
            <h2 className='ShopItem-Name'>{name}</h2>
            <div className='ShopItem-Color'>{color}</div>
            <div className='ShopItem-Price'>${price}</div>
            <div className='ShopItem-Button'> 
                <button >Add to cart</button>
            </div>
        </div>
    )
}

export default ShopItem

