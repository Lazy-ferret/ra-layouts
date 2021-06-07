import React from 'react'

function IconSwitch(props) {
    const { icon, onSwitch } = props;

    return (
        <div className='IconSwitch'>
            <span onClick={() => onSwitch(icon)} className="material-icons">{icon}</span>
        </div>
    )
}

export default IconSwitch

