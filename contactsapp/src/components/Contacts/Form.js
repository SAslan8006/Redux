import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contactsSlice';

function Form() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !number) return false;
        // const names = name.trim().split(",");
        // const data = names.map((name) => ({ id: nanoid(), name }))
        // names.forEach((name) => dispatch(addContact({ id: nanoid(), name })))
        // dispatch(addContacts(data))

        dispatch(addContact({ id: nanoid(), name, phone_number: number }))

        setName("");
        setNumber("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Ad Giriniz" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Phone number' value={number} onChange={(e) => setNumber(e.target.value)} />
                <div className="btn">
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form