import React from 'react'
import { useSelector } from 'react-redux';
import { contactSelectors } from '../../redux/contactsSlice';
import Item from './Item.js';
function List() {
    const contacts = useSelector(contactSelectors.selectAll)
    const total = useSelector(contactSelectors.selectTotal)
    return (
        <div>
            <div>Total contacts: {total}</div>
            <ul className='list'>
                {contacts.map((contact) => (
                    <Item key={contact.id} item={contact} />
                ))}
            </ul>
        </div>
    )
}

export default List