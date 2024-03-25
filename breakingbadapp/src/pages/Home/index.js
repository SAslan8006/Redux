import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCharacters } from '../../redux/services';
import './styles.css';
import Masonry from 'react-masonry-css';
import Loading from '../../components/Loading';
import Error from './../../components/Error';

function Home() {
    const { items, isLoading, error } = useSelector(state => state.characters);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCharacters())
    }, [dispatch])
    console.log(items.results)
    console.log(items.info)

    return (
        <div>
            <h1>Characters</h1>

            {isLoading && <Loading />}
            {error && <Error message={error} />}
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {items.results && items.results.map((character) =>
                    <div key={character.id}>
                        <img alt={character.name} src={character.image} className='character' />
                        <div className='character_name'>{character.name}</div>
                    </div>
                )}
            </Masonry>

        </div>
    )
}

export default Home