import '../Hufflepuff.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Hufflepuff() {
    const [hCharacters, setHCharacters] = useState([])
    const URL = 'https://hp-api.herokuapp.com/api/characters/house/hufflepuff'
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then((json) => {
                setHCharacters(json)
                console.log('success!')
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='Hufflepuff'>
            <h1>Welcome to the Hufflepuff Common Room!</h1>
            <div className='characters-h'>
                {hCharacters.slice(0, 3).map((character => {
                    return (
                        <Link to={`/characterdetails/${character.name}`} key={character.name}>
                            <div className='card-h'>
                                <div className='card-image-h'>
                                    <img src={character.image || 'https://i.imgur.com/GdAz0oC.png'} />
                                </div>
                                <div className='card-title-h'>
                                    <h3>{character.name}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                }))}
            </div>
            <div className='polyjuice'>
                <Link to='/Ravenclaw'> Take the Polyjuice Potion</Link>
            </div>
            <div className='go-home'>
                <Link to='/'>Speak to the Sorting Hat</Link>
            </div>
        </div>
    )
}

export default Hufflepuff