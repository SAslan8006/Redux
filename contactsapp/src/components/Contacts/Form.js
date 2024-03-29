import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact, addContacts } from '../../redux/contactsSlice';

function Form() {
    const [name, setName] = useState("");
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return false;
        const names = name.trim().split(",");
        const data = names.map((name) => ({ id: nanoid(), name }))
        // names.forEach((name) => dispatch(addContact({ id: nanoid(), name })))

        dispatch(addContacts(data))
        setName("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Ad Giriniz" value={name} onChange={(e) => setName(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form