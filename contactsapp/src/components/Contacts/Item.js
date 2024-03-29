import React from 'react'

function Item({ item }) {
    return (
        <li>
            <h1>
                <span>{item.name} </span>
                <span>{item.phone_number}</span>
            </h1>
        </li>
    )
}

export default Item