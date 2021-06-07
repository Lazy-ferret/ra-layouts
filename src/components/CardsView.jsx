import React from 'react';
import ShopCard from './ShopCard';

export default function CardsView(props) {
    const { cards } = props
    return (
        <div className='CardsView-Products'>
            {cards.map((card, index) =>
                <ShopCard
                    name={card.name}
                    price={card.price}
                    color={card.color}
                    img={card.img}
                    key={index}
                />
            )}
        </div>
    )
}
