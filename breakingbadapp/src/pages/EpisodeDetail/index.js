import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
function EpsidodesDetail() {
    const [epsidodes, setEpsidodes] = useState()
    const [loading, setLoading] = useState(true)
    const { episodes_id } = useParams();
    useEffect(() => {
        axios(`episode/${episodes_id}`)
            .then(res => setEpsidodes(res.data))
            .finally(() => setLoading(false))
    }, [episodes_id])
    return (
        <div>
            {loading && <Loading />}
            {epsidodes &&
                <div>
                    <h1>{epsidodes.name}</h1>
                    <p>{epsidodes.air_date}</p>
                    <p>{epsidodes.episode}</p>
                    <p>{epsidodes.url}</p>
                    <p>{epsidodes.created}</p>
                    {epsidodes.characters.map((character, key) =>
                        <Link to={character} key={key}>
                            <div className='character_name'>{character}</div>
                        </Link>)}
                </div>
            }



        </div>

    )
}

export default EpsidodesDetail