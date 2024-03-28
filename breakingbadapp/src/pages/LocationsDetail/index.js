import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
function LocationsDetail() {
    const [location, setLocation] = useState()
    const [loading, setLoading] = useState(true)
    const { locations_id } = useParams();
    useEffect(() => {
        axios(`location/${locations_id}`)
            .then(res => setLocation(res.data))
            .finally(() => setLoading(false))
    }, [locations_id])
    return (
        <div>
            {loading && <Loading />}
            {location &&
                <div>
                    <h1>{location.name}</h1>
                    <p>{location.type}</p>
                    <p>{location.dimension}</p>
                    <p>{location.url}</p>
                    <p>{location.created}</p>
                    {location.residents.map((character, key) =>
                        <Link to={character} key={key}>
                            <div className='character_name'>{character}</div>
                        </Link>)}
                </div>
            }



        </div>

    )
}

export default LocationsDetail