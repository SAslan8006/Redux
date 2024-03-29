import React from 'react'

function Item({ item }) {
    return (
        <div>
            <div key={item.id}>{item.name}</div>
        </div>
    )
}

export default Item