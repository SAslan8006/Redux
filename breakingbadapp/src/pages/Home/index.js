import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCharacters } from '../../redux/services';


function Home() {
    const { items, isLoading, error } = useSelector(state => state.characters);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCharacters())
    }, [dispatch])
    console.log(items)
    return (
        <div>Home</div>
    )
}

export default Home