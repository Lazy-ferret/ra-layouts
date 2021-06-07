import React, { useState } from 'react'
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

function Store(props) {
    const [view, setView] = useState('view_list')
    const { products } = props;

    const onSwitch = () => {
        setView((prev) => (prev === 'view_list' ? 'view_module' : 'view_list'))
    }

    return (
        <div className='Store'>
            < IconSwitch icon={view} onSwitch={onSwitch} />
            {view === 'view_list' ? <CardsView cards={products} /> : < ListView items={products} />}
        </div>
    )
}

export default Store

