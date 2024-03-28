import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';
import { getAllEpisodes } from '../../redux/services';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';

function Episode() {
    const { items, status, error, nextPage, nextPageLink, tpages } = useSelector(state => state.episodes);
    const dispatch = useDispatch()
    useEffect(() => {
        if (status === "idle") {
            dispatch(getAllEpisodes())
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
                        <Link to={`/episodes/${character.id}`}>
                            <div className='character_name'>{character.name}</div>
                            <div className='character_name'>{character.air_date}</div>
                            <div className='character_name'>{character.episode}</div>
                            <div className='character_name'>{character.characters[0]}</div>
                        </Link>
                    </div>
                )}
            </Masonry>
            {status === "loading" && <Loading />}
            {!nextPageLink && <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>There is nothing to be shown...</div>}
            <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
                {nextPageLink && status && <button onClick={() => dispatch(getAllEpisodes(nextPage))}>Load More... ({nextPage - 1} / {tpages})</button>}
            </div>
        </div>
    )
}

export default Episode