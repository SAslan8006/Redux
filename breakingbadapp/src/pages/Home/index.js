import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCharacters } from '../../redux/services';
import './styles.css';
import Masonry from 'react-masonry-css';
import Loading from '../../components/Loading';
import Error from './../../components/Error';

import { Link } from 'react-router-dom';
function Home() {
    const { items, status, error, nextPage, nextPageLink, tpages } = useSelector(state => state.characters);
    console.log("nextPage:", nextPage)
    const dispatch = useDispatch()
    useEffect(() => {
        if (status === "idle") {
            dispatch(getAllCharacters())
        }
    }, [dispatch, status])

    return (
        <div>
            <h1>Characters</h1>
            {status === "failed" && <Error message={error} />}
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {items && items.map((character) =>
                    <div key={character.id}>
                        <Link to={`/char/${character.id}`}>
                            <img alt={character.name} src={character.image} className='character' />
                            <div className='character_name'>{character.name}</div>
                        </Link>
                    </div>
                )}
            </Masonry>
            {status === "loading" && <Loading />}
            {!nextPageLink && <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>There is nothing to be shown...</div>}
            <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
                {nextPageLink && status && <button onClick={() => dispatch(getAllCharacters(nextPage))}>Load More... ({nextPage - 1} / {tpages})</button>}
            </div>
        </div>
    )
}

export default Home