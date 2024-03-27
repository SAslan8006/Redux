import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
function Detail() {
    const [char, setChar] = useState()
    const [loading, setLoading] = useState(true)
    const { char_id } = useParams();
    useEffect(() => {
        axios(`/character/${char_id}`)
            .then(res => setChar(res.data))
            .finally(() => setLoading(false))
    }, [char_id])
    return (
        <div>
            {loading && <Loading />}
            {char &&
                <div>
                    <h1>{char.name}</h1>
                    <img src={char.image} alt={char.name} />
                    <p>{char.status}</p>
                    <p>{char.species}</p>
                    <p>{char.type}</p>
                    <p>{char.gender}</p>
                    <p>{char.origin?.name}</p>
                    <p>{char.location?.name}</p>
                    <p>{char.created}</p>
                </div>
            }



        </div>

    )
}

export default Detail