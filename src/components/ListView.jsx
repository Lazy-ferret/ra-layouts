import React from 'react';
import ShopItem from './ShopItem';

function ListView(props) {
    const { items } = props;

    return (
        <div className='ListView-Products'>
            {items.map((item, index) =>
                < ShopItem
                    name={item.name}
                    price={item.price}
                    color={item.color}
                    img={item.img}
                    key={index}
                />)}
        </div>
    )
}

export default ListView

