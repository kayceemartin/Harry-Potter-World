import '../Gryffindor.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Gryffindor() {
    const [gCharacters, setGCharacters] = useState([])
    const URL = 'https://hp-api.herokuapp.com/api/characters/house/gryffindor'
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then((json) => {
                setGCharacters(json)
                console.log('success!')
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='Gryffindor'>
            <h1>Welcome to the Gryffindor Common Room!</h1>
            <div className='characters-g'>
                {gCharacters.slice(0, 3).map((character => {
                    return (
                        <Link to={`/characterdetails/${character.name}`} key={character.name}>
                            <div className='card-g'>
                                <div className='card-image-g'>
                                    <img src={character.image} />
                                </div>
                                <div className='card-title-g'>
                                    <h3>{character.name}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                }))}
            </div>
            <div className='polyjuice'>
                <Link to='/Slytherin'> Take the Polyjuice Potion</Link>
            </div>
            <div className='go-home'>
                <Link to='/'>Speak to the Sorting Hat</Link>
            </div>
        </div>
    )
}

export default Gryffindor

   