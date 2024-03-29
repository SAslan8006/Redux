import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContact } from '../../redux/contactSlice'

function Item({ item }) {
    const dispatch = useDispatch()

    const deleteHandle = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteContact(id))
        }
    }

    return (
        <>
            <li>
                <span>
                    {item.name}
                </span>
                <span>
                    {item.phoneNumber}
                </span>
                <div>
                    <span className='editBtn'>
                        <Link to={`/edit/${item.id}`}>
                            Edit
                        </Link>
                    </span>
                    <span className='deleteBtn' onClick={() => deleteHandle(item.id)}>X</span>
                </div>
            </li>
        </>
    )
}

export default Item