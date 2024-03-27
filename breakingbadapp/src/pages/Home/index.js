import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCharacters } from '../../redux/services';
import './styles.css';
import Masonry from 'react-masonry-css';
import Loading from '../../components/Loading';
import Error from './../../components/Error';

function Home() {
    const { items, isLoading, error, nextPage, nextPageLink, tpages, count, prevPageLink } = useSelector(state => state.characters);
    console.log("nextPage:", nextPage)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCharacters())
    }, [dispatch])

    return (
        <div>
            <h1>Characters</h1>
            {error && <Error message={error} />}
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {items && items.map((character) =>
                    <div key={character.id}>
                        <img alt={character.name} src={character.image} className='character' />
                        <div className='character_name'>{character.name}</div>
                    </div>
                )}
            </Masonry>
            {isLoading && <Loading />}
            {!nextPageLink && <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>Gösterilecek sayfa kalmamıştır...</div>}
            <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
                {nextPageLink && !isLoading && <button onClick={() => dispatch(getAllCharacters(nextPage))}>Load More... ({nextPage - 1} / {tpages})</button>}
            </div>
        </div>
    )
}

export default Home